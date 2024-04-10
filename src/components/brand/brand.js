import { El } from "../../utils/El/El";

export const Brand = (brand,src) => {
  return El({
    element: 'div',
    className: 'w-[60px] h-[91px] flex flex-col items-center gap-1',

    children: [
      El({
        element: 'div',
        className:
          'w-[60px] h-[60px] bg-gray-200 rounded-full flex items-center justify-center ',
        children: [
          El({
            element: 'img',
            className: 'w-[30px] h-[19px]',
            src:src
          }),
        ],
      }),
      El({
        element: 'h3',
        className: 'font-semibold text-sm	',
        innerText:brand,
      }),
    ],
  });
};
