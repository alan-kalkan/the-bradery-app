import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchData } from "../ProductStore";
import ProductCard from "../components/ProductCard";
function Store() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await fetchData("products"); 
        setProductData(result);
      } catch (error) {
       
        console.error("Error:", error);
      }
    };

    fetchMyData();
  }, []);
  return (
    <>
      <h1 align="center" className="p-3">
        E-Commerce
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productData ? (
          productData.map((product, index) => (
            <Col align="center" key={index}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p> Chargement . . .</p>
        )}
      </Row>
    </>
  );
}

export default Store;
