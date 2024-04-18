import { El } from "@/utils/El/El";
import { Link } from "../Link/Link";

export function cardItemSearch({ product }) {
  const { name, price, imageURL ,id } = product;

  return El({
    element: "div",
    className: "w-full overflow-y-auto scrollbar-hide ",
    id: "parentProductSearch",
    children: [
      Link({
        href: `/singleProduct/${id}`,
        className: "",
        children: [
          El({
            element: "div",
            className: "product relative",
            children: [
              El({
                element: "img",
                className: "rounded-xl h-[150px]",
                src: imageURL,
                alt: "name",
              }),
              El({
                element: "img",
                className: "absolute top-4 right-4 w-7",
                src: "./src/assets/svg/heart-search.svg",
                alt: "name",
              }),
              El({
                element: "h2",
                className: "font-bold text-lg ",
                innerText: name,
              }),
              El({
                element: "span",
                className: "font-semibold",
                innerText: ` $${price}.00`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
