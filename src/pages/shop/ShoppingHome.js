import { IconBrand } from '@/components/BrandPage/IconBrand/IconBrand';
import { TextBrand } from '@/components/BrandPage/TextBrand/TextBrand';
import { RenderProduct } from '@/components/HomePage/RenderProduct/RenderProduct';
import { Link } from '@/components/Link/Link';
import { Footer } from '@/layout/footer/footer';
import { hederHome } from '@/layout/header/header';
import { El } from '@/utils/El/El';

export function ShoppingHome() {
  return El({
    element: 'div',
    className: ' w-screen py-3 px-5 flex flex-col gap-3',
    children: [
      El({
        element: 'div',
        className: 'bg-white h-fit',
        children: [hederHome()],
      }),
      IconBrand(),
      El({
        element: 'div',
        children: [
          El({
            element: 'div',
            className: 'flex justify-between',
            children: [
              El({
                element: 'span',
                className: 'font-bold text-black',
                innerText: 'Most Popular',
              }),
              Link({
                href: '/allProduct',
                className: '',
                children: [
                  El({
                    element: 'span',
                    className: 'font-bold text-black',
                    innerText: 'See All',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      TextBrand(),
      El({
        element:"div",
        id:"home",
        children:[RenderProduct("ALL")]
      }),
    Footer(),
    ],
  });
}
