import { El } from '@/utils/El/El';
import { Buttonorder } from '../button/ButtonsOrder';


export function OrderProduct({ src, text }) {
  return El({
    element: 'div',
    className:
      'flex items-center  p-2 rounded-[7%] w-[85%] m-auto gap-[10px] relative',
    children: [
      El({
        element: 'div',
        className: 'm-auto ',
        children: [
          El({
            element: 'img',
            src: src,
            className: 'rounded-2xl bg-gray-200 w-[400px] ',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col gap-[3px]',
        children: [
          El({
            element: 'p',
            className: 'font-bold',
            innerText: text,
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-[2px] w-[230px]',
            children: [
              El({
                element: 'div',
                className: 'flex items-center gap-[5px]',
                children: [
                  El({
                    element: 'div',
                    innerText: '.',
                    className: 'bg-black rounded-full w-[25px]',
                  }),
                  El({
                    element: 'p',
                    className: 'text-[#abaaad]',
                    innerText: 'Black |',
                  }),
                ],
              }),
              El({
                element: 'p',
                className: 'text-[#abaaad]',
                innerText: 'Size = 42 |',
              }),
              El({
                element: 'p',
                className: 'text-[#abaaad]',
                innerText: 'Qty = 1',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'bg-[#d3d6db] w-fit p-2 rounded-[15%] text-[12px]',
            innerText: 'In Delivery',
          }),
          El({
            element: 'p',
            className: 'font-bold',
            innerText: '$105.00',
          }),
        ],
      }),
      Buttonorder({ text: 'order' }),
    ],
  });
}
