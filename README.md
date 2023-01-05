# Vue-Webshop

A fork of [Vuewebshop by WDaan](https://github.com/WDaan/Vuewebshop)  
For a comprehensive README on this project, see the original project.

![Home](https://github.com/WouterK12/Vue-Webshop/blob/master/screenshots/home.png?raw=true)

## Updated and new features

- Individual images for products
- PayPal payment method using a Netlify serverless function
- Shopping cart stored in localStorage
- Customize variables using the `config.json`
- Products are stored in a non-relational database
- Update products catalog in the database using npm commands

## Usage

```
npm install
ntl dev
```

## Deploy

If you want to deploy this project, or a fork of this project, first [register the repository on Netlify](https://www.netlify.com/products/build/).

### Required environment variables

Set the following environment variables as described in [Netlify's documentation](https://docs.netlify.com/environment-variables/get-started/#site-environment-variables).

**PayPal**  
You can request PayPal credentials for sandbox and live modes [on their website](https://developer.paypal.com/dashboard/applications/sandbox).

- `PAYPAL_CLIENT_ID` - PayPal REST API Client Id
- `PAYPAL_SECRET` - PayPal REST API Secret
- `PAYPAL_PRODUCTION_MODE` - (Optional)  
  If set to any value (e.g. `true`), the application uses PayPal's live API, instead of the default sandbox API.

**Database**

- `MONGODB_CONNECTION_STRING` - MongoDb cluster url  
  Learn how to set up a cluster below.

### Set up a MongoDb cluster

- Go to [mongodb.com/cloud](https://www.mongodb.com/cloud) and register or log in.
- Choose `New Project` and choose your plan. (`Shared` is free)
- Choose a server closest to from where your shoppers will be shopping.
- Leave settings on their defaults.
- Choose a username and generate a password.
- Set the cluster to be reachable from IP: `0.0.0.0/0`  
  (`0.0.0.0/0` means anywhere. This is required because Netlify Functions do not support a static IP address.)  
  (Or maybe look into [Signed proxy redirects](https://docs.netlify.com/routing/redirects/rewrites-proxies/#signed-proxy-redirects))
- On your dashboard, go to the cluster you just created and click `Connect`, then `Connect your application`.
- Copy the mongodb url for `Node.js`, latest version.  
  (Might look similar to `mongodb+srv://<username>:<password>@<clustername>.<subdomain>.mongodb.net/?retryWrites=true&w=majority`)
- Replace `<password>` with the password of your cluster.
- Set the url as environment variable named `MONGODB_CONNECTION_STRING` in Netlify.

### robots.txt

Don't forget to update or remove `/public/robots.txt` if you want to allow search engines to index your shop.

## Configuration

Configure the application to your likings using `config.json`.  
Settings involving PayPal are used to generate [PayPal's web experience profile](https://developer.paypal.com/docs/payment-experience/).  
The field `domain` is also used to generate urls for PayPal to redirect to.

```json
{
  "shopname": "Shop",
  "domain": "vue-webshop.wouterk12.com",
  "metadata": {
    "title": "Products",
    "description": "Here you can find awesome products"
  },
  "currency": "EUR",
  "currency_symbol": "€",
  "shipping_costs": 6.75,
  "paypal_merchant_email": "merchant@example.com",
  "paypal_web_experience": {
    "name": "Vue-Webshop-Experience",
    "logo_image": "https://vue-webshop.wouterk12.com/img/logo.jpg"
  }
}
```

## Update the catalog

The shop's catalog can be edited in `catalog.json`.  
Product images can be added to `/src/assets/`.

### .env

If you want to update the catalog, a `.env` file with the environment variable `MONGODB_CONNECTION_STRING` is required.  
The connection string can be retrieved from your MongoDb cluster, as explained above.

Example of the `.env` file in root folder of the project:

```env
MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@<clustername>.<subdomain>.mongodb.net/?retryWrites=true&w=majority
```

### Commands

- `npm run fetch-db`
  - Add products to `catalog.json` that are present in the database, but not in `catalog.json`.
  - Update existing products in `catalog.json` with data from database (based on `_id`).
- `npm run push-db`
  - Clear all data in the database and replace with data in `catalog.json`

**Note**  
When pushing new data to the database, the field `_id` is not required. It will be added to `catalog.json` automatically.

## Manually update stock

Automatically updating stock is not something I plan to add.  
Currently you must manually update the stock by running the commands above and editing `catalog.json`.  
This choice was made because it seems hard to implement a feature that requires a server, while this project is meant to run static.  
(Updating stock requires a server to check in with PayPal and see if the payment has succeeded.)
