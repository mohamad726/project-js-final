import { getCartProduct } from '@/api/get-api/get-api';
import { ProductCart } from '@/components/ProductCart/ProductCart';
import { El } from '@/utils/El/El';

export const RenderProductCart = (id) => {
  const Element = El({
    element: 'div',
    id: 'renderCart',
  });
  getCartProduct().then((products) => {
    products.map((itme) => {
      const Cart = ProductCart(itme);
      Element.append(Cart);
    });
    // const arrayPrice = products
    //   .map((itme) => itme.totalPrice)
    //   .reduce((a, b) => a + b, 0);
  });

  return Element;
};
