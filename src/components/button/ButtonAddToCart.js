import { ProductsCart } from '@/api/set-api/set-api';
import { El } from '@/utils/El/El';

export function BtnAddToCart(product) {
  return El({
    element: 'button',
    className:
      'flex items-center gap-3 border px-4 py-3 rounded-full text-white bg-black w-2/4 justify-center',
    eventListener: [
      {
        event: 'click',
        callback: () => {

          ProductsCart();
        },
      },
    ],
    children: [
      El({
        element: 'img',
        className: 'w-6',
        src: '../.././../src/assets/img/Bag 1.svg',
        alt: 'cart',
        id: 'icon cart',
      }),
      El({
        element: 'span',
        className: 'font-semibold text-lg',
        innerText: 'Add to Cart',
      }),
    ],
  });
}

// const AddToCart=()=>{

//   ProductsCart()
// }
