import { El } from '../../../utils/El/El';

export const SliderFirstApp = () => {
  return El({
    element: 'div',
    className: 'w-screen h-screen ',
    children: [
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'img',
            className: ' w-screen',
            src: '../../../../src/assets/img/WallpaperDog-20534536 1.png',
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
            innerText:'We provide high quality   products just for you'
          }),
          El({
            element:'div',
            className:'flex justify-center gap-1 ',
            children:[
              El({
                element:'span',
                className:' border-gray-500 w-9 hover:border-black border-2 rounded-full	'
              }),
              El({
                element:'span',
                className:' border-gray-500 w-9 hover:border-black border-2 rounded-full	'
              }),
              El({
                element:'span',
                className:' border-gray-500 w-9 hover:border-black   border-2 rounded-full	'
              }),
            ]
          }),
          El({
            element:'bottom',
            innerText:'Next',
            className:'bg-gray-800 w-[90%] text-white box-border rounded-full p-3 text-center hover:bg-black'


          })
        ]
      }),
    ],
  });
};
