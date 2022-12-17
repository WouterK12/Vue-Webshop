require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const Product = require("./models/product");
let catalog = require("./catalog.json");

const fetchArgName = "fetch";
const pushArgName = "push";

const arg = process.argv.slice(2)[0];
if (!arg) {
  console.error(`Parameter \"${fetchArgName}\" or \"${pushArgName}\" is required.`);
  process.exit(1);
}

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
  console.error("'MONGODB_CONNECTION_STRING' is a required environment variable! (Set it in a '.env' file)");
  process.exit(1);
}

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => console.log("Connected to MongoDB database"));
} catch (err) {
  console.error(err);
  process.exit(1);
}

(async () => {
  if (arg == fetchArgName) {
    await fetchProducts();
  } else if (arg == pushArgName) {
    await pushProducts();
  }

  process.exit();
})();

async function fetchProducts() {
  const productsInDb = await Product.find({});
  productsInDb.forEach((productInDb) => {
    const catalogProductIndex = catalog.products.findIndex((p) => p._id == productInDb._id);

    if (catalogProductIndex < 0) {
      catalog.products.push(productInDb);
      console.log(`Added product ${productInDb._id} to catalog`);
    } else {
      updateProductData(catalog.products[catalogProductIndex], productInDb);
      console.log(`Updated product ${productInDb._id} in catalog`);
    }
  });

  await updateCatalog();
  console.log("Updated catalog");
}

async function pushProducts() {
  await Product.deleteMany({});
  console.log("Cleared database");

  for await (let productInCatalog of catalog.products) {
    let newDbProduct = new Product({ _id: mongoose.Types.ObjectId() });

    updateProductData(newDbProduct, productInCatalog);

    const productInDb = await newDbProduct.save();

    productInCatalog._id = productInDb._id;

    console.log(`Added product ${productInCatalog._id} to database`);
  }

  await updateCatalog();
  console.log("Updated catalog");
}

function updateProductData(product, data) {
  product.name = data.name;
  product.description = data.description;
  product.banner = data.banner;
  product.pics = data.pics;
  product.price = data.price;
  product.stock = data.stock;
  product.updatedAt = Date.now();
}

const updateCatalog = () =>
  new Promise((resolve, reject) => {
    fs.writeFile("./catalog.json", JSON.stringify(catalog, null, 2), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
