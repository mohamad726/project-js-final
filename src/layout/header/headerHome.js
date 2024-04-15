import { Link } from '@/components/Link/Link';
import { El } from '@/utils/El/El';

export function Header() {
  return El({
    element: 'div',
    className: 'flex items-center gap-5',
    children: [
      Link({
        href: '/',
        className: '',
        children: [
          El({
            element: 'img',
            className: '',
            src: '../../../src/assets/img/Vector.svg',
            alt: 'icon back',
          }),
        ],
      }),
    ],
  });
}
