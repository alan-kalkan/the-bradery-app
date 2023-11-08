const connection = require("../db-config");

exports.getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.getProductStripeId = (req, res) => {
  const sql = "SELECT stripeId FROM products";
  connection.query(sql,(err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};
