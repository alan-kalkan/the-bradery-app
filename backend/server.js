//sk_test_51O997BBx4LpCTfMp93LnyqdiC18KCaQCGw6tU0CqZT3AcgOXjhBxPpnMYzG89YbbZbaBmgIxC42jTDaLLUytpryP006vvDL8jg
//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
// coffee : price_1O99D3Bx4LpCTfMp0VRdxLKJ
// camera : price_1O99E0Bx4LpCTfMpajtTpc6N
// sunglasses : price_1O99DiBx4LpCTfMpHyxXK9ZT
const connectDB = require("./db-config");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51O997BBx4LpCTfMp93LnyqdiC18KCaQCGw6tU0CqZT3AcgOXjhBxPpnMYzG89YbbZbaBmgIxC42jTDaLLUytpryP006vvDL8jg"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening on port 3000"));
