//import { RenderProduct } from "@/components/HomePage/RenderProduct/RenderProduct";
import { RenderProduct } from "@/components/HomePage/RenderProduct/RenderProduct";
import { El } from "@/utils/El/El";

export function ElementTextBrand({brand}){

  const button = El({
    element: "p",
    className: "border border-black flex items-center w-full px-4 py-4 rounded-2xl h-8 hover:bg-gray-900  transition-all	 hover:text-white whitespace-nowrap",
    innerText: brand,
  })

  button.addEventListener("click",(e)=>{
    const filter =e.target.innerText.toUpperCase()
    const render = document.getElementById("render")
    if(render != null){
      render.remove()
    }
    const main = document.getElementById("home")
    let productFilter = RenderProduct(filter)
    main.append(productFilter)

  })
return button;
}