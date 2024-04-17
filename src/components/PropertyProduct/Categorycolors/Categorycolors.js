import { El } from '@/utils/El/El';

export function Categorycolors({ colorCircle }) {
  const Element = El({
    element: 'div',
    className: 'w-[30px] h-[30px]',
    children: [
      El({
        element: 'input',
        className: 'peer hidden',
        id: `color${colorCircle}`,
        name: 'color',
        value: colorCircle,
        type: 'radio',
      }),
      El({
        element: 'label',
        className:
          ' select-none block h-full cursor-pointer rounded-full border-2 border-gray-300 py-1 px-2 font-bold text-gary-300 peer-checked:bg-black peer-checked:text-white peer-checked:border-none',
        restAttrs: {
          for: `color${colorCircle}`,
          style: `background-color:${colorCircle}`,
        },
      }),
    ],
  });


  return Element;
}


