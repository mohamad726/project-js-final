import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";

export function FooterCart() {
  return El({
    element: "div",
    className: " fixed left-0 bottom-0 w-full h-52 bg-gray-100 border-t px-4 rounded-t-3xl flex justify-between items-center ",
    children: [
      El({
        element: "div",
        className: "flex flex-col gap-3",
        children: [
          El({
            element: "span",
            className: "text-gray-500 text-xl",
            innerText: "Total Price",
          }),
          El({
            element: "span",
            className: "text-3xl font-bold mb-9",
            innerText: `$ 540.00`,
          }),
        ],
      }),
      Link({
        href: "/checkout",
        className: " ",
        children: [
          El({
            element: "button",
            className: "flex items-center text-2xl font-medium bg-black text-white px-10 py-3 rounded-full mb-9",
            innerText: "Checkout",
            children: [
              El({
                element: "img",
                className: "w-6 ml-6",
                src: "./src/assets/svg/right-arrow3-1.svg",
                alt: "",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
