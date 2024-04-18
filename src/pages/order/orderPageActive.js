import { OrderHeader } from '@/components/Order/OrderHeader';
import { OrderProduct } from '@/components/Order/OrderProduct';
import { El } from '@/utils/El/El';
import { Link } from '../../components/Link/Link';
import { Footer } from '@/layout/footer/footer';

export function OrderPageActive() {
  return El({
    element: 'div',
    className: 'p-4',
    children: [
      OrderHeader(),
      El({
        element: 'div',
        className: 'flex p-3 mt-[5px] w-full',
        children: [
          Link({
            href: '/orders_Active',
            className: 'w-[50%]',
            children: [
              El({
                element: 'div',
                innerText: 'Active',
                className:
                  'font-bold text-[15px] border-b-[4px] border-black p-1 w-full text-center',
              }),
            ],
          }),
          Link({
            href: '/orders_complete',
            className: 'w-[50%]',
            children: [
              El({
                element: 'div',
                innerText: 'Completed',
                className:
                  'font-bold text-[15px] border-b-[4px] border-gray p-1 w-full text-center text-[#c3cad4]',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' flex flex-col gap-[5px]',
        children: [
          OrderProduct({
            src: '../../../src/assets/img/3.webp',
            text: 'Nike Phantom Venom Academy FG',
          }),
          OrderProduct({
            src: '../../../src/assets/img/3.webp',
            text: 'Nike Phantom Venom Academy FG',
          }),
          OrderProduct({
            src: '../../../src/assets/img/3.webp',
            text: 'Nike Phantom Venom Academy FG',
          }),
        ],
      }),
      Footer(),
    ],
  });
}
