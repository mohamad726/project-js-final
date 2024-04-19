import { El } from "@/utils/El/El";


export function ChooseAdders({ src, text, alt, className, price, name, value ,description }) {
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
            element:"div",
            className:"",
            children:[
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
            ]
          })
        ],
      }),
      El({
        element: "div",
        children: [
          El({
            element: "input",
            type: "radio",
            name: name,
            value: value,
            className: "accent-black ",
          }),
        ],
      }),
    ],
  });

  return Element;
}


