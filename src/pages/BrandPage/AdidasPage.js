
import { RenderProduct } from "@/components/HomePage/RenderProduct/RenderProduct";
import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";


export function AdidasPage() {
  return El({
    element: "div",
    className: "p-4",
    children: [
      El({
        element: "div",
        className:"mb-6",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-5",
            children: [
              Link({
                href: "/getstart",
                className: "",
                children: [
                  El({
                    element: "img",
                    className: "",
                    src: '../../../src/assets/img/VectorBack.svg',
                  })
                ],
              }),
              El({
                element: "span",
                className: "font-bold text-black",
                innerText: "Adidas",
              }),
            ],
          }),
        ],
      }),
      El({
        element:"div",
        id:"home",
        children:[RenderProduct("ADIDAS")]
      }),

    ],
  });
}
