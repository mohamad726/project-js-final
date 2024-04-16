import { BASE_URL } from '@/components/constant/constant';

import axios from 'axios';

export async function ProductsCart(product) {
  try {
    const response = await axios.post(`${BASE_URL}/users/1/cart`, product);
  } catch (error) {
    console.error('خطا در افزودن محصول به سبد خرید:', error.message);
  }
}
