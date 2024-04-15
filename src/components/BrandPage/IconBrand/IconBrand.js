import { Link } from '../../Link/Link';
import { El } from '@/utils/El/El';
import { ElementBrandPage } from './ElementIconBrand';



export function IconBrand() {
  const btnElemnt = El({
    element: 'div',
    className: 'brands',
    children: [
      Link({
        href: '/Nike_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Nike',
            img: '../../../src/assets/img/nike.svg',
          }),
        ],
      }),
      Link({
        href: '/Adidas_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Adidas',
            img: '../../../src/assets/img/adidas.svg',
          }),
        ],
      }),
      Link({
        href: '/Puma_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Puma',
            img: '../../../src/assets/img/Puma.svg',
          }),
        ],
      }),
      Link({
        href: '/Asics_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Asics',
            img: '../../../src/assets/img/Asics.svg',
          }),
        ],
      }),
      Link({
        href: '/Reebok_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Reebok',
            img: '../../../src/assets/img/Reebok.svg',
          }),
        ],
      }),
      Link({
        href: '/NewBalance_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'New Ba..',
            img: '../../../src/assets/img/NewBa.svg',
          }),
        ],
      }),
      Link({
        href: '/Converse_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'Converse',
            img: '../../../src/assets/img/Converse.svg',
          }),
        ],
      }),
      Link({
        href: '/AllPage_Product',
        className: '',
        children: [
          ElementBrandPage({
            brand: 'More..',
            img: '../../../src/assets/img/more.svg',
          }),
        ],
      }),
    ],
  });
  return btnElemnt;
}
