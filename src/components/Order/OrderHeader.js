import { El } from "@/utils/El/El";
import { Link } from "../Link/Link";

export function OrderHeader() {
  return El({
    element: "div",
    className: "flex items-center justify-between p-3 mt-[10px]",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-2",
        children: [
          El({
            element: "img",
            className: "w-4",
            src: "../../../src/assets/img/Vector logo.svg",
          }),
          El({
            element: "h2",
            innerText: "My Order",
            className: "font-bold text-xl font-[cursive]",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          Link({
            href: "/search",
            className: "w-[50%]",
            children: [
              El({
                element: "img",
                className: "w-6",
                src: "../../../src/assets/img/search.svg",
                alt: "icon search",
              }),
            ],
          }),
          Link({
            href: "/orders_Active",
            className: "w-[50%]",
            children: [
              El({
                element: "img",
                className: "w-6",
                src: "../../../src/assets/img/More Circle.svg",
                alt: "icon search",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
