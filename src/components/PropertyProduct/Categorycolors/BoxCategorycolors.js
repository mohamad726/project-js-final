import { El } from '@/utils/El/El';
import { Categorycolors } from './Categorycolors';

export function BoxCategorycolors(colors) {
  const Element = El({
    element: 'div',
    className: 'flex gap-3 items-center',
    id: 'Categorycolors',
    children: colors.map((item) => Categorycolors({ colorCircle: item })),
  });
  return Element;
}
