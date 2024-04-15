import { getProduct } from '@/api/get-api/get-api';

import { El } from '@/utils/El/El';
import { productItem } from '../ProductItem/ProductItem';



export function RenderProduct(brand){
    
  if (!brand) {
    brand = "All";
  }
  const render = El({
    element: "div",
    id:"render",
    className: "section-product",

  });
  getProduct(brand).then((products)=>{

    products.map((product)=>{
        const productCard = productItem({product})
        render.append(productCard)
  
    })
  })
  return render;
}
