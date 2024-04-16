import { El } from "@/utils/El/El";
import { BtnAddToCart } from "../button/ButtonAddToCart";

 export function BuySectionCard({product}){
    return El({
        element: "div",
        className: "flex justify-between items-center gap-4 w-full",
        children: [
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              El({
                element: "span",
                className: "text-lg",
                innerText: "Total price",
              }),
              El({
                element: "span",
                className: "font-bold text-2xl",
                innerText: `$${product.price}.00`,
                id: "spanPrice",
              }),
            ],
          }),
         
          BtnAddToCart(product),
        ],
      })
}
