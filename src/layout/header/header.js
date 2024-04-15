
import { Link } from '@/components/Link/Link';
import { El } from '@/utils/El/El';

export function hederHome() {
  return El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className: 'flex items-center justify-between gap-2',
        children: [
          El({
            element: 'div',
            className: 'flex gap-3',
            children: [
              Link({
                href: '/profile',
                className: '',
                children: [
                  El({
                    element: 'img',
                    className: ' w-14 rounded-full',
                    src: '../../../src/assets/img/profile.jpg',
                    alt: '',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex flex-col',
                children: [
                  El({
                    element: 'p',
                    className: 'font-medium text-gray-500',
                    innerText: 'Good Morning 👋',
                  }),
                  El({
                    element: 'p',
                    className: 'font-bold text-black',
                    innerText: 'Mohamad Mahmodi',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-2',
            children: [
              El({
                element: 'img',
                className: '',
                src: '../../../src/assets/img/bell.svg',
                alt: 'icon bell',
              }),
              El({
                element: 'img',
                className: '',
                src: '../../../src/assets/img/heart.svg',
                alt: 'icon heart',
              }),
            ],
          }),
        ],
      }),
      Link({
        href: '/search',
        className: '',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col gap-4 outline-none w-full',
            children: [
              El({
                element: 'input',
                className: 'border relative pl-7 h-9 rounded bg-gray-100 mt-2',
                type: 'Search',
                placeholder: 'Search',
              }),
              El({
                element: 'img',
                src: '../../../src/assets/img/Search.svg',
                className: 'absolute top-[85px] ml-2',
                alt: 'icon Search',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
