// NETLIFY SERVERLESS FUNCTION
import fetch from "node-fetch";
import config from "../../config.json";
import mongoose from "mongoose";
import Product from "../../models/product";
import utils from "../../src/utils/calculator";

export const handler = async (event, context) => {
  const cart = JSON.parse(event.body);

  if (!cart || !cart.length) {
    return {
      statusCode: 400,
      body: "Cart cannot be empty!",
    };
  }

  // Netlify environment variables
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  const isProductionMode = process.env.PAYPAL_PRODUCTION_MODE;
  const connectionString = process.env.MONGODB_CONNECTION_STRING;
  //

  if (!clientId || !secret || !connectionString) {
    return {
      statusCode: 400,
      body:
        "'PAYPAL_CLIENT_ID', 'PAYPAL_SECRET' and 'MONGODB_CONNECTION_STRING' are required environment variables! (Set them in Netlify)",
    };
  }

  try {
    checkProductsValidity(connectionString, cart);
  } catch (err) {
    console.error(err);
    return { statusCode: 400, body: err };
  }

  const authenticationHeader = "Basic " + Buffer.from(`${clientId}:${secret}`).toString("base64");
  const paypalUrl = isProductionMode ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

  let existingExperience = await getExistingExperience(authenticationHeader, paypalUrl);

  if (!existingExperience) {
    existingExperience = await createNewExperience(authenticationHeader, paypalUrl);
  }

  const payment = createPaymentModel(cart, existingExperience);

  const paymentResponse = await fetch(`${paypalUrl}/v1/payments/payment`, {
    method: "POST",
    headers: {
      Authorization: authenticationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  });
  const paymentData = await paymentResponse.json();

  if (paymentResponse.status != 201) {
    return {
      statusCode: paymentResponse.status,
      body: paymentData,
    };
  }

  const approvalUrl = paymentData.links.find((l) => l.rel == "approval_url").href;

  return {
    statusCode: paymentResponse.status,
    body: approvalUrl,
  };
};

async function checkProductsValidity(connectionString, cart) {
  mongoose.set("strictQuery", false);
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => console.log("Connected to MongoDB database"));

  const productsInDb = await Product.find({});

  cart.forEach((cartProduct) => {
    const productInCatalog = productsInDb.find((p) => p._id == cartProduct._id);
    if (!productInCatalog) throw "Cart contains products that are no longer in the catalog";
    if (productInCatalog.stock < cartProduct.quantity) throw "Cart contains products that are out of stock";
  });
}

async function getExistingExperience(authenticationHeader, paypalUrl) {
  const experiencesResponse = await fetch(`${paypalUrl}/v1/payment-experience/web-profiles`, {
    method: "GET",
    headers: {
      Authorization: authenticationHeader,
      "Content-Type": "application/json",
    },
  });
  const experiencesData = await experiencesResponse.json();

  return experiencesData.find((e) => e.name == config.paypal_web_experience.name);
}

async function createNewExperience(authenticationHeader, paypalUrl) {
  const newExperience = {
    name: config.paypal_web_experience.name,
    presentation: {
      logo_image: config.paypal_web_experience.logo_image,
    },
    input_fields: {
      address_override: 0,
      no_shipping: 2,
    },
  };

  const newExperienceResponse = await fetch(`${paypalUrl}/v1/payment-experience/web-profiles`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authenticationHeader}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExperience),
  });

  return await newExperienceResponse.json();
}

function createPaymentModel(cart, existingExperience) {
  const cartTotal = utils.getCartTotal(cart);

  return {
    intent: "authorize",
    experience_profile_id: existingExperience.id,
    payer: {
      payment_method: "paypal",
    },
    transactions: [
      {
        amount: {
          currency: config.currency,
          total: cartTotal.total,
          details: {
            shipping: config.shipping_costs,
            subtotal: cartTotal.subTotal,
          },
        },
        payee: {
          email: config.paypal_merchant_email,
        },
        description: `Your purchase at ${config.domain}`,
        item_list: {
          items: cart.map((p) => {
            return {
              name: p.name,
              quantity: p.quantity,
              price: p.price,
              sku: p._id,
              currency: config.currency,
            };
          }),
        },
      },
    ],
    redirect_urls: {
      return_url: `https://${config.domain}/success`,
      cancel_url: `https://${config.domain}/cancelled`,
    },
  };
}
