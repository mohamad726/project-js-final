//import { Link } from "@/components/Link/link";
//import { Logo } from "@/components/Logo/logo";

import { Link } from '@/components/Link/Link';
import { Footer } from '@/layout/footer/footer';
import { El } from '@/utils/El/El';
import { RenderProductCart } from './RenderProductCart';

export function cartPage(id) {
  return El({
    element: 'div',
    className: 'px-6 py-6 w-screen h-[1100px] bg-gray-100',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between h-[40px]  p-2 rounded-md',

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
Link({
  href:'/search',
  children:[
    El({
      element: 'img',
      className: '',
      src: '../../../src/assets/img/search.svg',
      alt: 'icon search',
    }),
  ]
})
        ],
      }),
      RenderProductCart(),
      El({
        element: 'div',
        id: 'Modal',
        className:
          'bg-gray-100 w-screen h-[400px] fixed bottom-0 z-[11] rounded-t-[80px] hidden left-0 ',

      }),
      Footer(),
    ],
  });
}
