// coffee : price_1O99D3Bx4LpCTfMp0VRdxLKJ
// camera : price_1O99E0Bx4LpCTfMpajtTpc6N
// sunglasses : price_1O99DiBx4LpCTfMpHyxXK9ZT

export const productsArray = [
  {
    id: 1,
    price: 20.99,
  },
  {
    id: 2,
    price: 49.99,
  },
  {
    id: 3,
    price: 89.99,
  },{
    id: 4,
    price: 199.99,
  },
  {
    id: 5,
    price: 29.99,
  },
  {
    id: 6,
    price: 24.99,
  },{
    id: 7,
    price: 59.99,
  },{
    id: 8,
    price: 34.99,
  },{
    id: 9,
    price: 29.99,
  },{
    id: 10,
    price: 39.99,
  },{
    id: 11,
    price: 149.99,
  },
  {
    id: 12,
    price: 99.99,
  },
  {
    id: 13,
    price: 79.99,
  },{
    id: 14,
    price: 44.99,
  },
  {
    id: 15,
    price: 64.99,
  },
  {
    id: 16,
    price: 39.99,
  },{
    id: 17,
    price: 49.99,
  },{
    id: 18,
    price: 14.99,
  },{
    id: 19,
    price: 54.99,
  },{
    id: 20,
    price: 39.99,
  }
];
export async function fetchData(endpoint) {
  try {
    const response = await fetch(`http://localhost:4000/${endpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export async function getProductData(id) {
  try {
    const data = await fetchData("products"); // Appel de l'API pour récupérer les produits
    let productData = data.find((product) => product.id === id);

    if (!productData) {
      console.log("Product does not exist for ID: " + id);
      return undefined;
    }
    // console.log(productData.price);
    return productData;
  } catch (error) {
    console.error("Error getting product data:", error);
    throw error;
  }
}

export function getAllCartPrice(id) {

  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product doest not exist for ID: " + id);
    return undefined;
  }

  return productData;
}
