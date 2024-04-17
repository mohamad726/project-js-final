import { setDataToApi } from '@/api/set-api/set-api';
import { El } from '@/utils/El/El';

export function BtnAddToCart({ product }) {
  const Element = El({
    element: 'button',
    className:
      'flex items-center gap-3 border px-4 py-3 rounded-full text-white bg-black w-2/4 justify-center',
    eventListener: [
      {
        event: 'click',
        callback: () => {
          SubmitHandle({ product });
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

  return Element;
}

const SubmitHandle = ({ product }) => {
  const boxColor = document.querySelector('.boxColor');
  const boxSize = document.querySelector('.boxSize');
  const color = document.querySelector("input[name='color']:checked")?.value;
  const size = document.querySelector("input[name='size']:checked")?.value;
  const Quantity = document?.querySelector('#spanQuantity').innerText;
  if (color == null && size == null) {
    boxColor.classList.add('text-red-400');
    boxColor.innerText = 'Please Seletc Colors!';
    boxSize.classList.add('text-red-400');
    boxSize.innerText = 'Please Seletc Size!';
  } else if (size !== null&&color == null) {
    boxSize.classList.remove('text-red-400');
    boxSize.innerText = 'Size';
  } else if (color !== null&&size == null) {
    boxColor.classList.remove('text-red-400');
    boxColor.innerText = 'Color';
  } else if (size == null) {
    boxSize.classList.add('text-red-400');
    boxSize.innerText = 'Please Seletc Size!';
  } else if (color == null) {
    boxColor.classList.add('text-red-400');
    boxColor.innerText = 'Please Seletc Colors!';
  } else {
    boxColor.classList.remove('text-red-400');
    boxColor.innerText = 'Color';
    boxSize.classList.remove('text-red-400');
    boxSize.innerText = 'Size';
    const data = {
      ...product,
      colorObj: color,
      sizeObj: size,
      Quantity,
      value: Date.now(),
      totalPrice: Quantity * product.price,
    };
    setDataToApi(data)
  }

};
