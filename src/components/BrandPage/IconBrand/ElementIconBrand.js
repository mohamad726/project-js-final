import { RenderProduct } from '@/components/HomePage/RenderProduct/RenderProduct';
import { El } from '@/utils/El/El';

export function ElementBrandPage({ brand, img }) {
  const button = El({
    element: 'div',
    className: 'icon-brand',
    children: [
      El({
        element: 'img',
        className: 'bg-gray-200 rounded-full px-3 py-4 ',
        src: img,
        alt: 'icon brand',
      }),
      El({
        element: 'p',
        innerText: brand,
      }),
    ],
  });

    button.addEventListener("click",(e)=>{
      console.log(e.target.innerText);
      const filter =e.target.innerText.toLowerCase()
      const render = document.getElementById("render")
      if(render != null){
        console.log(render);
        render.remove()
      }
      const main = document.getElementById("home")
      let productFilter = RenderProduct(filter)
      main.append(productFilter)

    })
  return button;
}
