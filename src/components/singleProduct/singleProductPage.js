import { Link } from '../Link/Link';
import { El } from '@/utils/El/El';
import { BASE_URL_ICON } from '../constant/constant';
import { BuySectionCard } from '../Buy-section-card/buy-section-card';
import { BoxCategorySize } from '../PropertyProduct/CategorySize/BoxCategorySize';
import { BoxCategorycolors } from '../PropertyProduct/Categorycolors/BoxCategorycolors';
import { Footer } from '@/layout/footer/footer';
import { setProductWeshlist } from '../Weshlist/setProductWeshlist';


//import { DecreaseBtn, IncreaseBtn } from '../button/MathBtn';

export function singleProductPage({ product }) {
  let quantity = 1;
  function plusQuantity() {
    const spanQuantity = document.getElementById('spanQuantity');

    if (spanQuantity.innerText < 3) {
      spanQuantity.innerText = ++quantity;
      document.getElementById('spanPrice').innerText = `$ ${
        product.price * spanQuantity.innerText
      }.00`;
    }
  }
  function minusQuantity() {
    const spanQuantity = document.getElementById('spanQuantity');
    const spanPrice = document.getElementById('spanPrice');
    if (spanQuantity.innerText > 1) {
      spanQuantity.innerText = --quantity;
      document.getElementById('spanPrice').innerText = `$ ${
        product.price * spanQuantity.innerText
      }.00`;
    }
  }


  function iconBeloved() {

    const heartOne = document.getElementById('heartOne');
    const heartTwo = document.getElementById('heartTwo');
    heartOne.style.display = 'none';
    heartTwo.style.display = 'block';

    setProductWeshlist({product})

  }
  function iconUninterested() {
    const heartOne = document.getElementById('heartOne');
    const heartTwo = document.getElementById('heartTwo');
    heartOne.style.display = 'block';
    heartTwo.style.display = 'none';
  }

  return El({
    element: 'div',
    className: 'w-screen pb-3',
    children: [
      Link({
        href: `/getstart`,
        className: '',
        children: [
          El({
            element: 'img',
            className: 'absolute top-4 left-6',
            src: '../../../src/assets/img/VectorBack.svg',
            alt: 'icon back',
          }),
        ],
      }),
      El({
        element: 'img',
        className: 'w-full',
        src: product.imageURL,
        alt: 'image product',
      }),
      El({
        element: 'div',
        className: 'px-4 py-5',
        children: [
          El({
            element: 'div',
            className: 'flex justify-between',
            children: [
              El({
                element: 'h2',
                className: 'font-bold text-xl',
                innerText: product.name,
              }),
              El({
                element: 'img',
                className: 'cursor-pointer',
                src: `${BASE_URL_ICON}/heart.svg`,
                alt: 'icon heart',
                id: 'heartOne',
                eventListener: [{ event: 'click', callback: iconBeloved }],
              }),
              El({
                element: 'img',
                className: 'cursor-pointer w-6 hidden',
                src: `${BASE_URL_ICON}/heart 2.svg`,
                alt: 'icon heart',
                id: 'heartTwo',
                eventListener: [{ event: 'click', callback: iconUninterested }],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex ',
            children: [
              El({
                element: 'h2',
                className: 'bg-gray-200 p-1 rounded-lg mr-6',
                innerText: '5.371 sold',
              }),
              El({
                element: 'img',
                className: 'w-8',
                src: `${BASE_URL_ICON}/star-half-svgrepo-com.svg`,
                alt: 'icon star',
              }),
              El({
                element: 'h2',
                className: 'p-1 rounded-lg ',
                innerText: '4.3 (5,389 reviews)',
              }),
            ],
          }),
          El({
            element: 'hr',
            className: 'my-2',
          }),
          El({
            element: 'div',
            className: '',
            children: [
              El({
                element: 'h3',
                className: 'font-semibold text-xl',
                innerText: 'Description',
              }),
              El({
                element: 'span',
                className: '',
                innerText:
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, consequatur!',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex justify-between',
            children: [
              El({
                element: 'div',
                className: 'w-1/2 ',
                children: [
                  El({
                    element: 'span',
                    className: 'font-semibold boxSize',
                    innerText: 'Size',
                  }),
                  BoxCategorySize(product.sizes),
                ],
              }),
              El({
                element: 'div',
                className: 'w-1/2  ',
                children: [
                  El({
                    element: 'span',
                    className: 'font-semibold boxColor',
                    innerText: 'Color',
                  }),
                  BoxCategorycolors(product.colors),
                ],
              }),
              //color
             
              //size
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center my-6',
            children: [
              El({
                element: 'span',
                className: 'text-2xl font-bold ',
                innerText: 'Quantity',
              }),
              El({
                element: 'div',
                className:
                  'flex items-center justify-around gap-4 bg-gray-100 px-3 py-1 rounded-full ml-5 w-[160px]',
                children: [
                  El({
                    element: 'p',
                    className: 'font-semibold text-5xl',
                    innerText: '-',
                    eventListener: [
                      { event: 'click', callback: minusQuantity },
                    ],
                  }),
                  El({
                    element: 'span',
                    className: 'text-3xl',
                    innerText: quantity,
                    id: 'spanQuantity',
                  }),
                  El({
                    element: 'p',
                    className: 'font-medium text-4xl',
                    innerText: '+',
                    eventListener: [{ event: 'click', callback: plusQuantity }],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'hr',
            className: 'my-8',
          }),
          
          BuySectionCard({ product }),
        ],
      }),
      //Footer()
    ],
  });
}
