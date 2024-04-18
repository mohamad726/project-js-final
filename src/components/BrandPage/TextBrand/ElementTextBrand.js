//import { RenderProduct } from "@/components/HomePage/RenderProduct/RenderProduct";

import { RenderProductWishlist } from "@/components/HomePage/RenderProduct/RenderProductWishlist";
import { El } from "@/utils/El/El";

export function ElementTextBrand({brand}){

  const button = El({
    element: "p",
    className: "border border-black flex items-center w-full px-4 py-4 rounded-2xl h-8 hover:bg-gray-900  transition-all	 hover:text-white whitespace-nowrap",
    innerText: brand,
  })

  button.addEventListener("click",(e)=>{
    const filter =e.target.innerText.toUpperCase()
    const render = document.getElementById("renderweshlist")
    if(render != null){
      render.remove()
    }
    const main = document.getElementById("homewishlist")
    let productFilter = RenderProductWishlist(filter)
    main.append(productFilter)

  })
return button;
}

