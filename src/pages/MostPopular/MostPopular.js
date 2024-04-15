import { TextBrand } from '@/components/BrandPage/TextBrand/TextBrand';
import { RenderProduct } from '@/components/HomePage/RenderProduct/RenderProduct';

import { Link } from '@/components/Link/Link';
import { El } from '@/utils/El/El';

export function MostPopular() {
  return El({
    element: 'div',
    className: 'p-4',
    children: [
      El({
        element: 'div',
        children: [
          El({
            element: 'div',
            className: 'flex items-center gap-6',
            children: [
              Link({
                href: '/getstart',
                className: '',
                children: [
                  El({
                    element: 'img',
                    className: '',
                    src: '../../../src/assets/img/VectorBack.svg',
                    alt: 'icon back',
                  }),
                ],
              }),
              El({
                element: 'span',
                className: 'font-bold text-black',
                innerText: 'Most Popular',
              }),
            ],
          }),
        ],
      }),
      TextBrand(),
      El({
        element: 'div',
        id: 'home',
        children: [RenderProduct('ALL')],
      }),
    ],
  });
}
