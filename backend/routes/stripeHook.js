const express = require("express");
const router = express.Router();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

endpointSecret =
  "whsec_1a1f40a7e3714363f0da67f72ee9f9f59442b124e418af3e411b85e333900842";

router.post("/webhook", express.json(), (request, response) => {
  const sig = request.headers["stripe-signature"];

  let data;
  let eventType;
  if (endpointSecret) {
    let event;

    try {
      console.log("Request Body:", request.body);
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("verified");
    } catch (err) {
      console.log("sa marche pas");
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        console.log(customer);
        console.log("data:", data);
      })
      .catch((err) => console.log(err.message));
  }
  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});

module.exports = router;
