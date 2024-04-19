import { El } from "@/utils/El/El";
import { Link } from "../Link/Link";


export function ChooseAddersCheckOut({
  src,
  text,
  alt,
  className,
  price,
  description,
}) {
  const Element = El({
    element: "div",
    className: "flex justify-between items-center p-4 my-4 gap-2",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-4",
        children: [
          El({
            element: "img",
            className: className,
            src: src,
            alt: alt,
          }),
          El({
            element: "div",
            className: "",
            children: [
              El({
                element: "h2",
                className: "font-bold text-xl",
                innerText: text,
              }),
              El({
                element: "h2",
                className: "text-md",
                innerText: description,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        children: [
          Link({
            href: "/address",
            className: "",
            children: [
              El({
                element: "img",
                className: "w-6",
                src: "../../../src/assets/img/edit-2.svg",
                alt: "icon pencel",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return Element;
}
