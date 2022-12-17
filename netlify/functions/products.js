import mongoose from "mongoose";
import Product from "../../models/product";

export const handler = async (event, context) => {
  // Netlify environment variable
  const connectionString = process.env.MONGODB_CONNECTION_STRING;
  //

  if (!connectionString) {
    return {
      statusCode: 400,
      body: "'MONGODB_CONNECTION_STRING' is a required environment variable! (Set it in Netlify)",
    };
  }

  try {
    connectToDatabase(connectionString);
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
    };
  }

  const productsInStock = await Product.find()
    .where("stock")
    .gte(1)
    .exec();

  return {
    statusCode: 200,
    body: JSON.stringify(productsInStock),
  };
};

function connectToDatabase(connectionString) {
  mongoose.set("strictQuery", false);
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => console.log("Connected to MongoDB database"));
}
