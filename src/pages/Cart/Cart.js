//import { Link } from "@/components/Link/link";
//import { Logo } from "@/components/Logo/logo";

import { Footer } from '@/layout/footer/footer';
import { El } from '@/utils/El/El';

export function cartPage() {
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
  return El({
    element: 'div',
    className: 'px-6 py-6 w-screen h-screen',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between',
        children: [
          El({
            element: 'div',
            className: 'flex items-center gap-5',
            children: [
              El({
                element: 'img',
                className: 'w-[18px]',
                src: '../../../src/assets/img/logoBlack.svg',
              }),
              El({
                element: 'span',
                className: 'font-bold text-black text-xl',
                innerText: 'My Cart',
              }),
            ],
          }),
          El({
            element: 'img',
            className: '',
            src: '../../../src/assets/img/search.svg',
            alt: 'icon search',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex  ',
        children: [
          El({
            element: 'img',
            className: 'w-36 rounded-3xl p-3',
            src: 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg',
            alt: 'icon back',
          }),
          El({
            element: 'div',
            className: 'flex flex-col w-full gap-5',
            children: [
              El({
                element: 'div',
                className: 'flex justify-between',
                children: [
                  El({
                    element: 'h2',
                    className: 'ont-bold text-lg font-[700]',
                    innerText: 'NMD_R1 Flash Red',
                  }),
                  El({
                    element: 'img',
                    className: '',
                    src: '../../../src/assets/img/Delete 1.svg',
                    alt: 'icon back',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex',
                children: [
                  El({
                    element: 'div',
                    className:
                      'ont-bold text-lg flex items-center jsutify-center',
                    children: [
                      El({
                        element: 'span',
                        className:
                          'w-[15px] h-[15px] bg-red-500 inline-block rounded-full ',
                      }),
                      El({
                        element: 'h2',
                        className: 'pl-3 pr-3',
                        innerText: 'red ',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex',
                    children: [
                      El({
                        element: 'h2',
                        className: '',
                        innerText: ' | Size =',
                      }),
                      El({ element: 'h2', innerText: '42' }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex  h-[40px] w-[100%] ',
                children: [
                  El({
                    element: 'div',
                    className: 'w-[60%] ',
                    children: [
                      El({
                        element: 'h2',
                        className: 'ont-bold text-lg font-[700]',
                        innerText: '$15.00',
                      }),
                    ],
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
                        eventListener: [
                          { event: 'click', callback: plusQuantity },
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Footer(),
    ],
  });
}
