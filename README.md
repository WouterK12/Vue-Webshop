# Vue-Webshop

A fork of [Vuewebshop by WDaan](https://github.com/WDaan/Vuewebshop)  
For a comprehensive README on this project, see the original project.

## Updated features

- Individual images for products
- PayPal payment method using a Netlify serverless function
- Shopping cart stored in localStorage

## Planned

- Products stored in non-relational database
- Products stock updated after successful payment

## Usage

```
npm install netlify-cli -g
ntl dev
```

### Fork

If you want to deploy a fork of this project, first [register your fork on Netlify](https://www.netlify.com/products/build/).  
Set the following environment variables as described in the [Netlify documentation](https://docs.netlify.com/environment-variables/get-started/#site-environment-variables):

- `PAYPAL_CLIENT_ID` - Your PayPal REST API Client Id
- `PAYPAL_SECRET` - Your PayPal REST API Secret
- `PAYPAL_PRODUCTION_MODE` - (Optional)  
  If set to any value, the application uses PayPal's live API, instead of the default sandbox API.

You can request PayPal credentials for sandbox and live modes [on their website](https://developer.paypal.com/dashboard/applications/sandbox).
