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
const productsRoutes = require("./routes/products");
const bodyParser = require("body-parser");

connectDB;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Content-Type, Authorization, X-Requested-With"
  );

  next();
});

app.use("/products", productsRoutes);
app.get("/", (req, res) => {
  res.send("yoo");
});
app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  console.log(items);
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.stripeId,
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

app.listen(4000, () => console.log("listening on port 4000"));
