import { El } from "@/utils/El/El";


export function NotFound() {
  
  return El({
    element: "div",
    className: "hidden",
    id:"notFound",
    children: [
      El({
        element: "img",
        className: "mt-10",
        src: "./src/assets/img/Doc.png",
        alt: "icon wishlist",
      }),
      El({
        element: "div",
        className: "flex flex-col justify-center items-center text-center",
        children: [
          El({
            element: "h2",
            className: "text-3xl font-bold",
            innerText: "Not Found",
          }),
          El({
            element: "h2",
            className: "text-xl",
            innerText:
              "Sorry, the keyword you entered cannot be found. Please check again or search with another keyword.",
          }),
        ],
      }),
    ],
  });
}
