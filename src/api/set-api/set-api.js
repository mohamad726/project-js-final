import { BASE_URL } from '@/components/constant/constant';

import axios from 'axios';

export async function setDataToApi(data){
  const {data:productData}=await axios.get(`${BASE_URL}/users/1`);
  const cart =productData.cart.concat(data);
  let response=await axios.patch(`${BASE_URL}/users/1`,{cart})
  return response.data;
}