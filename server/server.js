const stripe = require("stripe")(
  "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"
);
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2022-11-15" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey:
      "pk_live_51Lfk0lBKh2rUDIsLimK0bxCc66vj6QLVOMoler5pwsE9dYUxCQyvwa9wzuZPliCc4q3jjFI6iEjKuKIBVHXzPzwD00Kw41TSIB",
  });
});
