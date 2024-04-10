import { El } from '../../utils/El/El';

export const MostPopular = () => {
  return El({
    element: 'div',
    className: ' w-[95%]	 ',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between w-[95%] font-semibold mb-2 ',
        children: [
          El({ element: 'h2', innerText: 'Most Popular' ,className:'text-lg'}),
          El({
            element: 'h2',
            innerText: 'See All',
            className:'text-sm'
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'h-[39px] w-full overflow-x-scroll	whitespace-nowrap   bg-[#fff]  no-scrollbar',
        children: [
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'All',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'Nike',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'Adidas',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'Puma',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'Reebok',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'New Ba..',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'Converse',
          }),
          El({
            element: 'button',
            className: 'hover:bg-black hover:text-white  py-1.5 px-5 border-black border rounded-full mr-2 transition-all duration-400	',
            innerText: 'More',
          })
        ],
      }),
    ],
  });
};
