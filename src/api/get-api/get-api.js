import { productItem } from '@/components/HomePage/ProductItem/ProductItem';
import { BASE_URL } from '@/components/constant/constant';
import { data } from 'autoprefixer';
import axios from 'axios';
//const BASE_URL = 'http://localhost:3000';

// GetUser
export async function GetUser() {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
}

export async function getItemFormodal(value) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  const data = response.filter((item) => item.value == value);
  return data;
}




export async function getCartProduct() {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  console.log(response);
  return response;
}


export async function getIdToServer(id){
  const res =await axios.get(`${BASE_URL}/users`);
  const response=res.data[0].cart;

  const deleteItem=response.filter((item)=>item.value != id)
  const cart=[...deleteItem];
 
  let data=await axios.patch(`${BASE_URL}/users/1`,{cart})
  return data
}


export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
}

export async function getProduct(brand) {
  if (brand == 'ALL') {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
    return response.data;
  }
}


export async function getProductWshlist(filter) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].wishlist;
   console.log(filter);
  if (filter != "ALL") {
  const final = response.filter((item) => item.brand == filter);
  return final;
  } else {
  return response;
}}






export async function getItemBySearch(search) {
  const response = await axios.get(`${BASE_URL}/products?q=${search}`);
  return response.data;
}

// //filter
// export async function FilterProducts(){
//   const { data } = await axios.get(`${Base_Url}/products?brand=NIKE`);
//   return data
// }

//  export const filter = await FilterProducts();
