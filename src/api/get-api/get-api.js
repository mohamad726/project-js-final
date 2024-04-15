import axios from 'axios';
const BASE_URL = 'http://localhost:3000';


// GetUser
export async function GetUser() {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
}

export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
}
export async function getProduct(brand) {
  if (brand == "ALL") {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
    return response.data;
  }
}




// //filter 
// export async function FilterProducts(){
//   const { data } = await axios.get(`${Base_Url}/products?brand=NIKE`);
//   return data
// }

//  export const filter = await FilterProducts();

