import { El } from '@/utils/El/El';
import { ElementTextBrand } from './ElementTextBrand';

export function TextBrand() {
  const btnElemnt = El({
    element: 'div',
    className: 'home-filter',
    children: [
      ElementTextBrand({ brand: 'All' }),
      ElementTextBrand({ brand: 'Adidas' }),
      ElementTextBrand({ brand: 'Nike' }),
      ElementTextBrand({ brand: 'Puma' }),
      ElementTextBrand({ brand: 'Asics' }),
      ElementTextBrand({ brand: 'Converse' }),
      ElementTextBrand({ brand: 'New Balance' }),
      ElementTextBrand({ brand: 'Reebok' }),
    ],
  });
  return btnElemnt;
}
