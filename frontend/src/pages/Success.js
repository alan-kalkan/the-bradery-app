// Dans votre composant de page de succès (ou de confirmation)
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Success = () => {
  const cartItems = useContext(CartContext);

  return (
    <>
      <h1>Commande confirmée !</h1>
      {console.log(cartItems.items)}
    </>
  );
};

export default Success;
