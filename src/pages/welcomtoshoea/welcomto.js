import { El } from "../../utils/El/El";

export const landing = () => {
  return El({
    element: 'div',
    className: '  w-screen   h-screen relative',
    children: [
      El({
        element:'span',
        className:'spin-animation',

      }),
      El({
        element: 'div',
        className:
          'WallpaperDog bg-no-repeat flex justify-center items-center  bg-cover bg-centert 	w-screen  h-screen  text-3xl  text-[#fff]	 font-medium',
        children: [
          El({
            element: 'img',
            className: 'w-screen absolute top-0  h-screen bg-no-repeat',
            src: '../../../../src/assets/img/Rectangle 1.png',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col w-screen top-0 text-white absolute  h-screen  justify-end 	',
        children: [
          El({
            element: 'h3',
            innerText: 'Welcome to 👋',
            className:'text-3xl pb-9 pl-5 font-medium	'
          }),
          El({
            element: 'h3',
            innerText: 'Shoea',
            className:'text-5xl pb-9 pl-5 font-semibold'
          }),
          El({
            element: 'p',
            className:'pb-9 pl-5 pr-5',
            innerText:
              'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
          }),
        ],
      }),
    ],
  });
};
