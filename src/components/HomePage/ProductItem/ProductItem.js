import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";


export function productItem({product}) {
const {name,price,imageURL,id} = product
console.log(product);
  const productCard =Link({
    href: `/singleProduct/${id}`,
    className: "",
    children: [
      El({
        element: "div",
        className: "product",
        children: [
          El({
            element: "img",
            className: "rounded-xl h-[150px]",
            src:imageURL,
            alt: name,
          }),
          El({
            element: "h2",
            className: "font-bold text-lg ",
            innerText: name,
          }),
          El({
            element: "span",
            className: "font-semibold",
            innerText: ` $ ${price}.00`,
          }),
        ],
      })
    ],
  })
  return productCard;
}
