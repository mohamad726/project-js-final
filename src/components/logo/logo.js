import { El } from '../../utils/El/El';

export const Logo = () => {
  return El({
    element: 'div',
    className:
      'bg-[#000] w-[60px] h-[60px] rounded-full flex p-3 	 items-center	justify-center		',
    children: [
      El({
        element: 'img',
        src: '../../../../src/assets/img/logo.svg',
      }),
    ],
  });
};
