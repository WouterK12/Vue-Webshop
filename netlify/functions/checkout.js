// NETLIFY SERVERLESS FUNCTION
import fetch from "node-fetch";
import config from "../../config.json";

export const handler = async (event, context) => {
  const cart = JSON.parse(event.body);

  // Netlify environment variables
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  const isProductionMode = process.env.PAYPAL_PRODUCTION_MODE;
  //

  if (!clientId || !secret) {
    return {
      statusCode: 400,
      body: "'PAYPAL_CLIENT_ID' and 'PAYPAL_SECRET' are required environment variables! (Set them in Netlify)",
    };
  }

  // prettier-ignore
  const Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  const authenticationHeader = Base64.encode(`${clientId}:${secret}`);
  const paypalUrl = isProductionMode ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

  let existingExperience = await getExistingExperience(authenticationHeader, paypalUrl);

  if (!existingExperience) {
    existingExperience = await createNewExperience(authenticationHeader, paypalUrl);
  }

  const payment = createPaymentModel(cart, existingExperience);

  const paymentResponse = await fetch(`${paypalUrl}/v1/payments/payment`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeaderBase64}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  });
  const paymentData = await paymentResponse.json();

  if (paymentResponse.status != 201) {
    return {
      statusCode: paymentResponse.status,
      body: paymentData.state,
    };
  }

  const approvalUrl = paymentData.links.find((l) => l.rel == "approval_url").href;

  return {
    statusCode: paymentResponse.status,
    body: approvalUrl,
  };
};

async function getExistingExperience(authenticationHeader, paypalUrl) {
  const experiencesResponse = await fetch(`${paypalUrl}/v1/payment-experience/web-profiles`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${authenticationHeader}`,
      "Content-Type": "application/json",
    },
  });
  const experiencesData = await experiencesResponse.json();

  return experiencesData.find((e) => e.name == config.PAYPAL_WEB_EXPERIENCE.NAME);
}

async function createNewExperience(authenticationHeader, paypalUrl) {
  const newExperience = {
    name: config.PAYPAL_WEB_EXPERIENCE.NAME,
    presentation: {
      logo_image: config.PAYPAL_WEB_EXPERIENCE.LOGO_IMAGE,
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
  const temp = cart.reduce((a, b) => a + (b.totalPrice || 0), 0);
  const cartTotal = Math.round(temp * 100) / 100;

  return {
    intent: "authorize",
    experience_profile_id: existingExperience.id,
    payer: {
      payment_method: "paypal",
    },
    transactions: [
      {
        amount: {
          currency: config.CURRENCY,
          total: cartTotal + config.SHIPPING_COSTS,
          details: {
            shipping: config.SHIPPING_COSTS,
            subtotal: cartTotal,
          },
        },
        payee: {
          email: config.PAYPAL_MERCHANT_EMAIL,
        },
        description: `Your purchase at ${config.DOMAIN}`,
        item_list: {
          items: cart.map((p) => {
            return {
              name: p.name,
              quantity: p.quantity,
              price: p.price,
              sku: p.id,
              currency: config.CURRENCY,
            };
          }),
        },
      },
    ],
    redirect_urls: {
      return_url: `https://${config.DOMAIN}/success`,
      cancel_url: `https://${config.DOMAIN}/cancelled`,
    },
  };
}
