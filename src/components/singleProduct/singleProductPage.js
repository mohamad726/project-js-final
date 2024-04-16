import { Link } from '../Link/Link';
import { El } from '@/utils/El/El';
import { BASE_URL_ICON } from '../constant/constant';
import { BuySectionCard } from '../Buy-section-card/buy-section-card';
//import { DecreaseBtn, IncreaseBtn } from '../button/MathBtn';

export function singleProductPage({ product }) {
  let quantity = 1;
  function plusQuantity() {
    const spanQuantity = document.getElementById("spanQuantity");

    if (spanQuantity.innerText < 3) {
      spanQuantity.innerText = ++quantity;
      document.getElementById("spanPrice").innerText =
      `$ ${product.price * spanQuantity.innerText}.00`;
    }
  }
  function minusQuantity() {
    const spanQuantity = document.getElementById("spanQuantity");
    const spanPrice = document.getElementById("spanPrice");
    if (spanQuantity.innerText > 1) {
      spanQuantity.innerText = --quantity;
      document.getElementById("spanPrice").innerText =
        `$ ${product.price * spanQuantity.innerText}.00`;
    }
  }
  function iconBeloved() {
    const heartOne = document.getElementById("heartOne");
    const heartTwo = document.getElementById("heartTwo");
    heartOne.style.display = "none";
    heartTwo.style.display = "block";
  }
  function iconUninterested() {
    const heartOne = document.getElementById("heartOne");
    const heartTwo = document.getElementById("heartTwo");
    heartOne.style.display = "block";
    heartTwo.style.display = "none";
  }


  const black = product.colors[0];
  const brown = product.colors[1];
  const white = product.colors[2];
  const blue = product.colors[3];
  console.log(`bg-[${brown}]`);
  const red = product.colors[4];

  return El({
    element: 'div',
    className: 'w-screen pb-3',
    children: [
      Link({
        href: `/getstart`,
        className: '',
        children: [
          El({
            element: 'img',
            className: 'absolute top-4 left-6',
            src: '../../../src/assets/img/VectorBack.svg',
            alt: 'icon back',
          }),
        ],
      }),
      El({
        element: 'img',
        className: 'w-full',
        src: product.imageURL,
        alt: 'image product',
      }),
      El({
        element: 'div',
        className: 'px-4 py-5',
        children: [
          El({
            element: 'div',
            className: 'flex justify-between',
            children: [
              El({
                element: 'h2',
                className: 'font-bold text-xl',
                innerText: product.name,
              }),
              El({
                element: "img",
                className: "cursor-pointer",
                src: `${BASE_URL_ICON}/heart.svg`,
                alt: "icon heart",
                id: "heartOne",
                eventListener: [{ event: "click", callback: iconBeloved }],
              }),
              El({
                element: "img",
                className: "cursor-pointer w-6 hidden",
                src: `${BASE_URL_ICON}/Heart 1.svg`,
                alt: "icon heart",
                id: "heartTwo",
                eventListener: [{ event: "click", callback: iconUninterested }],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex ",
            children: [
              El({
                element: "h2",
                className: "bg-gray-200 p-1 rounded-lg mr-6",
                innerText: "5.371 sold",
              }),
              El({
                element: "img",
                className: "w-8",
                src: `${BASE_URL_ICON}/star-half-svgrepo-com.svg`,
                alt: "icon star",
              }),
              El({
                element: "h2",
                className: "p-1 rounded-lg ",
                innerText: "4.3 (5,389 reviews)",
              }),
            ],
          }),
          El({
            element: "hr",
            className: "my-2",
          }),
          El({
            element: "div",
            className: "",
            children: [
              El({
                element: "h3",
                className: "font-semibold text-xl",
                innerText: "Description",
              }),
              El({
                element: "span",
                className: "",
                innerText:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, consequatur!",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "div",
                className: "flex flex-col gap-2 mt-3",
                children: [
                  El({
                    element: "p",
                    className: "font-bold text-xl",
                    innerText: "Size",
                  }),
                  El({
                    element: "div",
                    className: "flex gap-2",
                    children: [
                      El({
                        element: "span",
                        className:
                          "border border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white",
                        innerText: "40",
                      }),
                      El({
                        element: "span",
                        className:
                          "border border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white",
                        innerText: "41",
                      }),
                      El({
                        element: "span",
                        className:
                          "border border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white",
                        innerText: "42",
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex flex-col gap-2 mt-3",
                children: [
                  El({
                    element: "p",
                    className: "font-bold text-xl",
                    innerText: "Color",
                  }),
                  El({
                    element: "div",
                    className: "flex gap-2",
                    children: [
                      El({
                        element: "span",
                        className:
                          `border bg-[${red}] border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white`,
                        innerText: "12",
                        style:'background-color=${blue}'
                      }),
                      El({
                        element: "span",
                        className:
                          "border border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white",
                        innerText: "12",
                      }),
                      El({
                        element: "span",
                        className:
                          "border border-black rounded-full p-2 font-bold text-xl hover:bg-black hover:text-white",
                        innerText: "12",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center my-6",
            children: [
              El({
                element: "span",
                className: "text-2xl font-bold ",
                innerText: "Quantity",
              }),
              El({
                element: "div",
                className:
                  "flex items-center justify-around gap-4 bg-gray-100 px-3 py-1 rounded-full ml-5 w-[160px]",
                children: [
                  El({
                    element: "p",
                    className: "font-semibold text-5xl",
                    innerText: "-",
                    eventListener: [
                      { event: "click", callback: minusQuantity },
                    ],
                  }),
                  El({
                    element: "span",
                    className: "text-3xl",
                    innerText: quantity,
                    id: "spanQuantity",
                  }),
                  El({
                    element: "p",
                    className: "font-medium text-4xl",
                    innerText: "+",
                    eventListener: [{ event: "click", callback: plusQuantity }],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "hr",
            className: "my-8",
          }),
        BuySectionCard({product})
        ],
      }),
    ],
  });
}
