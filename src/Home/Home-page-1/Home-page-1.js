import { Brand } from '../../components/brand/brand';
import { MostPopular } from '../../components/most-popular/most-popular';
import { El } from '../../utils/El/El';

export const HomePage1 = () => {
  return El({
    element: 'div',
    className: 'w-screen h-screen flex flex-col items-center',
    children: [
      El({
        element: 'div',
        className: ' h-[80px] w-[95%] flex items-center gap-2 justify-center',
        children: [
          El({
            element: 'img',
            src: '../../../src/assets/img/logo.png',
          }),
          El({
            element: 'div',
        className:'mr-16',
            children: [
              El({
                element: 'h3',
                innerText: 'Good Morning👋',
                className: 'text-gray-600 font-semibold',
              }),
              El({
                element: 'h3',
                innerText: 'Mohamad.Mahmodi',
                className: 'font-semibold',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-1',
            children: [
              El({ element: 'img', src: '../../../src/assets/img/bell.svg' }),
              El({ element: 'img', src: '../../../src/assets/img/heart.svg' }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-[95%]  flex items-center h-[37px] bg-gray-100 rounded-md',
        children: [
          El({
            element: 'img',
            className: 'p-3 ',
            src: '../../../src/assets/img/search.svg',
          }),
          El({
            element: 'input',
            className: 'bg-gray-100 w-full h-full',
            placeholder: 'Search',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-[95%] h-[234px]  mt-2  flex gap-6 flex-wrap items-center justify-center	',
        children: [
            Brand('Nike','../../../src/assets/img/nike.svg'),
            Brand('Adidas','../../../src/assets/img/adidas.svg'),
            Brand('Puma','../../../src/assets/img/puma.svg'),
            Brand('Asics','../../../src/assets/img/asics.svg'),
            Brand('Reebok','../../../src/assets/img/reebok.svg'),
            Brand('New Ba..','../../../src/assets/img/NewBa.svg'),
            Brand('Converse','../../../src/assets/img/converse.svg'),
            Brand('More..','../../../src/assets/img/more.svg'),
           
        ],
      }),
      MostPopular()
    ],
  });
};
