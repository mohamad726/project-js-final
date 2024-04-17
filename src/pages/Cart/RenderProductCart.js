import { getCartProduct } from '@/api/get-api/get-api';
import { ProductCart } from '@/components/ProductCart/ProductCart';
import { El } from '@/utils/El/El';

export const RenderProductCart = () => {
  const Element = El({
    element: 'div',
    id: 'renderCart',
  });
  getCartProduct().then((products) => {
    products.map((itme) => {
    
      const Cart = ProductCart(itme);
      Element.append(Cart);
    });
    const arrayPrice = products
      .map((itme) => itme.totalPrice)
      .reduce((a, b) => a + b, 0);
  });
  //  Element.addEventListener("click",(e)=>{
  //   console.log(e.target.innerText);
  //   const filter =e.target.innerText.toLowerCase()
  //   const render = document.getElementById("render")
  //   if(render != null){
  //     console.log(render);
  //     render.remove()
  //   }
  //   const main = document.getElementById("body")
  //   let productFilter = RenderProduct(filter)
  //   main.append(productFilter)

  // })

  return Element;
};
