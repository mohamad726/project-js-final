import { Link } from '@/components/Link/Link';
import { Logo } from '@/components/logo/logo';
import { Footer } from '@/layout/footer/footer';
import { El } from '@/utils/El/El';

export function ProfilePage() {
  return El({
    element: 'div',
    className: 'flex flex-col justify-center items-center',
    children: [
      El({
        element: 'div',
        className: 'flex justify-center items-center p-6 ',
        children: [
          El({
            element: 'img',
            className: 'w-44 rounded-full border-2 border-gray-600 p-3 left-2',
            children:[
                Logo()
            ],
            alt: 'icon brand',
          }),
          Link({
            href: '/welcome',
            className: '',
            children: [
              El({
                element: 'img',
                className: 'absolute top-3 right-3',
                src: './src/assets/svg/Logout.svg',
                alt: 'icon brand',
              }),
              El({
                element: 'span',
                className: 'absolute top-2 right-10 font-bold ',
                innerText: 'LogOut',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-2 absolute top-2 left-4',
        children: [
          El({
            element: 'img',
            className: '',
            src: '../../../src/assets/img/bell.svg',
            alt: 'icon bell',
          }),
          El({
            element: 'img',
            className: 'w-7',
            src: '../../../src/assets/img/heart.svg',
            alt: 'icon bell',
          }),
        ],
      }),
      Link({
        href: '/',
        className: '',
        children: [
          El({
            element: 'div',
            className: '',
            children: [
              El({
                element: 'img',
                className: '',
                src: './src/assets/svg/Group 2.svg',
                alt: 'icon brand',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'hr',
        className: 'mt-24',
      }),
      El({
        element: 'div',
        className: 'flex justify-around w-full px-4 text-2xl font-bold ',
        children: [
          El({
            element: 'h2',
            innerText: ' Mohamad ',
          }),
          El({
            element: 'h2',
            innerText: 'Mahmodi ',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full py-4 hover:bg-gray-200',
        children: [
          Link({
            href: '/wishlist',
            className: 'ff',
            children: [
              El({
                element: 'div',
                className: 'flex gap-2',
                children: [
                  El({
                    element: 'img',
                    src: './src/assets/svg/heart.svg',
                    alt: 'icon wishlist',
                  }),
                  El({
                    element: 'h2',
                    innerText: 'My Wishlist',
                  }),
                ],
              }),
              El({
                element: 'h2',
                innerText: '>',
              }),
            ],
          }),
        ],
      }),
      Footer(),
    ],
  });
}
