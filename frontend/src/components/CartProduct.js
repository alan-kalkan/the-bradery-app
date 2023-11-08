import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const [productData, setProductData] = useState(null);

  const id = props.id;
  const quantity = props.quantity;

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  async function getProductDetails(id) {
    try {
      const data = await getProductData(id);
      setProductData(data);
    } catch (error) {
      console.error("Error getting product details:", error);
    }
  }

  return (
    <>
      {productData && (
        <>
          <h3>{productData.title}</h3>
          <p>{quantity} total</p>
          <p>{(quantity * productData.price).toFixed(2)} €</p>
          <Button
            size="sm"
            onClick={() => cart.deleteFromCart(id)}
          >
            Remove
          </Button>
          <hr></hr>
        </>
      )}
    </>
  );
}

export default CartProduct;
