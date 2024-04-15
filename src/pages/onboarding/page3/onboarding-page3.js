import { El } from '../../../utils/El/El';

export const SliderFirstApp = (src,Text) => {
  return El({
    element: 'div',
    className: 'w-screen  ',
    children: [
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'img',
            className: ' w-screen h-[450px]',
            src: src,
          }),
        ],
      }),
      El({
        element: 'div',
         className:'flex gap-10 flex-col items-center',
        children:[
          El({
            element:'p',
            className:' px-3  mt-4  text-3xl text-center font-medium ',
            innerText:Text
          }),

        ]
      }),
    ],
  });
};


