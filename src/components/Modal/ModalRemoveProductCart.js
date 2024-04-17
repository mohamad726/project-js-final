import { getItemFormodal } from '@/api/get-api/get-api';
import { El } from '@/utils/El/El';

export function ModalRemove(selectedIdProdutcRemovecart) {
  getItemFormodal(selectedIdProdutcRemovecart).then((item) => {
    const cart = ModalDelete(...item);
  });
}

function ModalDelete(product) {
  function RemoveProductCart(e) {
    hiddenModal();
    const id=e.target
    console.log(id);
    
  }
  const Modal = document.getElementById('Modal');

  Modal.classList.remove('hidden');
  // const Closed=document.getElementById('Closed');
  // Closed.addEventListener('click',()=>{

  //     Modal.classList.add('hidden')
  // })
  const Element = El({
    element: 'div',
    className: 'w-screen',
    id: `Cont${product.value}`,
    children: [
      El({
        element: 'div',
        id: 'Closed',
        className:
          'w-[40px] mx-auto mt-[10px] h-[2px] bg-gray-300 rounded-full',
      }),
      El({
        element: 'h2',
        className: 'font-[600] text-[25px] py-4 text-center',
        innerText: 'Remove From Cart?',
      }),
      El({ element: 'hr', className: 'my-7 bg-gray-300' }),
      El({
        element: 'div',
        className:
          ' ml-[5%]  w-[90%] flex gap-2 items-center justify-center bg-white rounded-2xl',
        children: [
          El({
            element: 'img',
            className: 'w-[150px] p-3',
            src: product.imageURL,
          }),
          El({
            element: 'div',
            className: 'flex flex-col w-screen',
            children: [
              El({
                element: 'h2',
                className: 'text-[20px]  font-[600]',
                innerText: product.name,
              }),
              El({
                element: 'div',
                className: 'flex items-center px-3',
                children: [
                  El({
                    element: 'span',
                    className: 'w-[15px] h-[15px] bg-red-600 rounded-full',
                  }),
                  El({
                    element: 'h2',
                    className: 'pl-2',
                    innerText: product.colorObj,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex justify-around',
                children: [
                  El({
                    element: 'div',
                    className: 'font-[600]',
                    innerText: `$ ${product.totalPrice}`,
                  }),
                  El({
                    element: 'div',
                    className:
                      'bg-gray-200  px-3 py-2 rounded-full flex flax-col',
                    children: [
                      El({
                        element: 'p',
                        innerText: '-',
                        className: 'font-[500] text-[20px] px-2',
                      }),
                      El({
                        element: 'span',
                        innerText: '1',
                        id: `spanQuantityCart${product.value}`,
                        className: ' px-1 font-[500] text-[20px]',
                      }),
                      El({
                        element: 'p',
                        innerText: '+',
                        className: 'font-[500] px-1 text-[20px]',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({ element: 'hr', className: 'my-4 bg-gray-300' }),
      El({
        element: 'div',
        className: 'flex gap-3 items-center pb-5 w-screen justify-center',
        children: [
          El({
            element: 'button',
            className:
              'bg-gray-200 rounded-full  hover:bg-black hover:text-white px-[60px] py-[15px]',
            innerText: 'Cancel',
            eventListener: [{ event: 'click', callback: hiddenModal }],
          }),
          El({
            element: 'button',
            id:product.value,
            className:
              'bg-gray-200 hover:bg-black hover:text-white rounded-full  px-[60px] py-[15px]',
            innerText: 'Yes,Remove',
            eventListener: [{ event: 'click', callback: RemoveProductCart }],
        
          }),
        ],
      }),
    ],
  });
  Modal.append(Element);
  function hiddenModal() {
    const contant = document.getElementById(`Cont${product.value}`);
    Modal.classList.add('hidden');
    contant.classList.add('hidden');
  }

  return Element;
}
