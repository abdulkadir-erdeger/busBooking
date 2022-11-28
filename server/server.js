const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";

const stripe = require("stripe")(stripeSecretKey);

const app = express();
app.use(express.json());
app.post("/payment-sheet", async (req, res) => {
  const email = "test@gmail.com";
  const customer = await stripe.customers.create({ email });
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2022-11-15" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 11000,
    currency: "try",
    customer: customer.id,
    shipping: {
      name: "test Kullanıcısı",
      address: {
        state: "Ankara",
        city: "Keçiören",
        line1: "1453  Istanbulun Fethi",
        postal_code: "06120",
        country: "TR",
      },
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: stripePublishableKey,
  });
});

app.listen(4242, () => console.log("Server up"));
