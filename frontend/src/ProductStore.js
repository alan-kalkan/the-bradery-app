// coffee : price_1O99D3Bx4LpCTfMp0VRdxLKJ
// camera : price_1O99E0Bx4LpCTfMpajtTpc6N
// sunglasses : price_1O99DiBx4LpCTfMpHyxXK9ZT

const productsArray = [
  {
    id: "price_1O99D3Bx4LpCTfMp0VRdxLKJ",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1O99DiBx4LpCTfMpHyxXK9ZT",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1O99E0Bx4LpCTfMpajtTpc6N",
    title: "Camera",
    price: 49.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product doest not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
