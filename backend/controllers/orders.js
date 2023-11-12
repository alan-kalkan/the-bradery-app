const connection = require("../db-config");

exports.postOrder = (req, res) => {
  const { productId, quantity, total } = req.body;
  const sql =
    "INSERT INTO Orders (product_id, quantity, total) VALUES (?, ?, ?)";

  connection.query(sql, [productId, quantity, total], (err, result) => {
    if (err) {
      console.error("Error inserting order:", err);
      res.status(500).json({ error: "Error inserting order" });
    } else {
      const orderId = result.insertId;
      console.log("Order inserted successfully with ID:", orderId);
      res.json({ orderId });
    }
  });
};

exports.getOrderById = (req, res) => {
  const orderId = req.params.orderId;
  const sql = "SELECT * FROM Orders WHERE id = ?";

  connection.query(sql, [orderId], (err, result) => {
    if (err) {
      console.error("Error fetching order by ID:", err);
      res.status(500).json({ error: "Error fetching order by ID" });
    } else {
      if (result.length === 0) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.json(result[0]);
      }
    }
  });
};
