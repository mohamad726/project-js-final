import { El } from "@/utils/El/El";


export function OrderCheckOut({imgUrl,name,price,quantity }) {
  return El({
    element: "div",
    className:
      "flex items-center bg-grey-200 p-3 rounded-xl w-[95%] m-auto relative gap-5 mt-3",
    children: [
      El({
        element: "div",
        className: "",
        children: [
          El({
            element: "img",
            className: "rounded-2xl bg-gray-200 h-16 w-16",
            src:imgUrl,
            alt: "img product",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col gap-[5px]",
        children: [
          El({
            element: "p",
            className: "font-bold",
            innerText: name,
          }),
          El({
            element: "div",
            className: "flex items-center gap-[7px]",
            children: [
              El({
                element: "div",
                className: "flex items-center gap-[5px]",
                children: [
                  El({
                    element: "div",
                    innerText: ".",
                    className: "bg-black rounded-full w-[20px] h-[20px]",
                  }),
                  El({
                    element: "p",
                    className: "text-[#abaaad]",
                    innerText: "Black |",
                  }),
                ],
              }),
              El({
                element: "p",
                className: "text-[#abaaad]",
                innerText: "Size = 42",
              }),
            ],
          }),
          El({
            element: "p",
            className: "font-bold",
            innerText: price,
          }),
        ],
      }),
      El({
        element: "div",
        innerText: quantity,
        className:
          "bg-gray-200 px-3 flex items-center justify-center rounded-full w-6 text-center absolute right-8 bottom-3",
      }),
    ],
  });
}
