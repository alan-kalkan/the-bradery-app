import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { getProductData } from "../ProductStore";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    // Récupérer les stripeIds pour chaque produit dans le panier
    const updatedItems = await Promise.all(
      cart.items.map(async (item) => {
        const productData = await getProductData(item.id);
        return {
          stripeId: productData.stripeId,
          quantity: item.quantity,
        };
      })
    );

    // Envoyer la requête avec les données mises à jour
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: updatedItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>
            Panier :
            {productsCount > 1
              ? `  ${productsCount} articles`
              : `  ${productsCount} article`}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Articles dans le panier</p>
              {cart.items.map((currentProduct, index) => (
                <CartProduct
                  key={index}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" onClick={checkout}>
                Passer commande!
              </Button>
            </>
          ) : (
            <h1>Aucun article dans votre panier !</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
