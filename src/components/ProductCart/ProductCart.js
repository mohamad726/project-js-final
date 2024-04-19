import { El } from '@/utils/El/El';
import { Link } from '../Link/Link';
import { ModalRemove } from '../Modal/ModalRemoveProductCart';

export const ProductCart = (product) => {
  const idPrduct=product.id
function RemoveProductCart(e){
const selectedIdProdutcRemovecart=e.target.id
ModalRemove(selectedIdProdutcRemovecart)
}
 let quantity = product.Quantity;
    function plusQuantity(e) {
      const spanQuantityCart = document.getElementById(`spanQuantityCart${product.value}`);
      if (spanQuantityCart.innerText < 3) {
        spanQuantityCart.innerText = ++quantity;
        document.getElementById(`totalPriceProductCart${product.value}`).innerText = `$${
          product.totalPrice * spanQuantityCart.innerText
        }`;
      }
    }
    function minusQuantity() {
      const spanQuantityCart = document.getElementById(`spanQuantityCart${product.value}`);
      const totalPriceProductCart = document.getElementById(`totalPriceProductCart${product.value}`);
      if (spanQuantityCart.innerText > 1) {
        spanQuantityCart.innerText = --quantity;
        document.getElementById(`totalPriceProductCart${product.value}`).innerText = `$${
          product.totalPrice * spanQuantityCart.innerText
        }`;
      }
    }
  const Element =El({
    element: 'div',
    className: 'flex my-2 p-2 rounded-md bg-white',
    id:product.id,
    children: [

      Link({
        href: `/singleProduct/${idPrduct}`,
         className: "",
         children:[
          El({
            element: 'img',
            className: ' rounded-3xl p-3',
            src: product.imageURL,
            alt: 'icon back',
          }),
         ]
       }),
  
      El({
        element: 'div',
        className: 'flex flex-col w-full gap-5',
        children: [
          El({
            element: 'div',
            className: 'flex justify-between',
            children: [
              El({
                element: 'h2',
                className: 'ont-bold text-lg font-[700]',
                innerText: product.name,
              }),
              El({
                element: 'img',
                className: '',
                src: '../../../src/assets/img/Delete 1.svg',
                alt: 'icon Delete',
                id:product.value,
        eventListener:[{event:'click',callback:RemoveProductCart}]
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center' ,
            children: [
              El({
                element: 'div',
                className: 'ont-bold text-lg flex items-center jsutify-center',
                children: [
                  El({
                    element: 'span',
                    className:
                      `w-[15px] h-[15px]  inline-block rounded-full `,
                      restAttrs: {
                        style: `background-color:${product.colorObj}`,
                      },

                  }),
                  El({
                    element: 'h2',
                    className: 'pl-3 pr-3 text-gray-400 font-[500]',
                    innerText: product.colorObj,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex',
                children: [
                  El({
                    element: 'h2',
                    className: 'text-gray-400 font-[500]',
                    innerText: ' | Size =',
                  }),
                  El({ element: 'h2',className:'text-gray-400 font-[500]', innerText: product.sizeObj }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex  h-[40px] w-[100%] ',
            children: [
              El({
                element: 'div',
                className: 'w-[60%] ',
                children: [
                  El({
                    element: 'h2',
                    id:`totalPriceProductCart${product.value}`,
                    className: 'ont-bold text-lg font-[700]',
                    innerText: `$${product.totalPrice}`,
                  }),
                ],
              }),
              El({
                element: 'div',
                className:
                  'flex  items-center justify-around gap-4 bg-gray-100 px-3 py-1 rounded-full ml-5 w-[160px]',
                children: [
                  El({
                    element: 'p',
                    className: 'font-semibold text-3xl',
                    innerText: '-',
                    eventListener: [
                      { event: 'click', callback: minusQuantity },
                    ],
                  }),
                  El({
                    element: 'span',
                    className: 'text-2xl',
                    innerText: product.Quantity,
                    id: `spanQuantityCart${product.value}`,
                  }),
                  El({
                    element: 'p',
                    className: 'font-medium text-3xl',
                    innerText: '+',
                    eventListener: [{ event: 'click', callback: plusQuantity }],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })

       

  
      

  
  

  return Element;
};
