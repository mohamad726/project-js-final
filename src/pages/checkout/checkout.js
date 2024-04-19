
import { ChooseAddersCheckOut } from "@/components/ChooseAddersCheckOut/ChooseAddersCheckOut";
import { Link } from "@/components/Link/Link";
import { OrderCheckOut } from "@/components/Order/OrderCheckOut";

import { El } from "@/utils/El/El";


export function CheckoutPage() {
  return El({
    element: "div",
    className: "",
    children: [
      El({
        element: "div",
        className: "flex items-center justify-between p-3 mt-2",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-2",
            children: [
              El({
                element: "img",
                className: "",
                src: "../../../src/assets/img/VectorBack.svg",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      window.history.back();
                    },
                  },
                ],
              }),
              El({
                element: "h2",
                innerText: "Checkout",
                className: "font-bold text-xl font-[cursive]",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center gap-2",
            children: [
              El({
                element: "img",
                className: "w-5",
                src: "../../../src/assets/img/More Circle.svg",
                alt: "ellipsis icon",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: " flex flex-col",
        children: [
          El({
            element: "p",
            className: "font-bold ml-4",
            innerText: "Shipping Address",
          }),
          ChooseAddersCheckOut({
            src: "../../../src/assets/img/delivered-box-verification-symbol-svgrepo-com.svg",
            text: "Economy",
            alt: "icon Economy",
            className: "w-10 ",
            description: "61480 Sunbrook Park,PC 5679",
          }),
        ],
      }),
      El({
        element: "p",
        innerText: "Order List",
        className: "font-bold ml-4",
      }),
      El({
        element: "div",
        className: "w-full h-[30vh] overflow-y-auto scrollbar-hide",
        children: [
          OrderCheckOut({
            imgUrl:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
            name: "Nike React Infinity...",
            price: "$85.00",
            quantity: "1",
          }),
          OrderCheckOut({
            imgUrl:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
            name: "Adidas React Infinity...",
            price: "$120.00",
            quantity: "2",
          }),
          OrderCheckOut({
            imgUrl:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
            name: "Nike React Infinity...",
            price: "$95.00",
            quantity: "3",
          }),
          OrderCheckOut({
            imgUrl:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
            name: "Nike React Infinity...",
            price: "$125.00",
            quantity: "2",
          }),
        ],
      }),
      El({
        element: "p",
        innerText: "Choose Shipping",
        className: "font-bold ml-4 mt-2",
      }),
      El({
        element: "div",
        className:
          "p-3 w-[90%] m-auto rounded mt-3 flex items-center justify-between",
        children: [
          El({
            element: "div",
            className: " flex items-center gap-3",
            children: [
              El({
                element: "img",
                alt: "Truck icon",
                className: "w-10",
                src: "../../../src/assets/img/truck-11.svg",
              }),
              El({
                element: "p",
                innerText: "Choose Shipping Type",
                className: "font-bold text-sm",
              }),
            ],
          }),
          Link({
            href: "/choseShopping",
            className: "",
            children: [
              El({
                element: "img",
                src: "../../../src/assets/img/arrow-next-svg.svg",
                alt: "great icon",
                className: "w-4",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "p",
        innerText: "Promo Code",
        className: "font-bold ml-4 mt-2",
      }),
      El({
        element: "div",
        className: "flex items-center justify-between p-3",
        children: [
          El({
            element: "input",
            className: "p-3 rounded w-[80%]",
            placeholder: "Enter Promo Code",
          }),
          El({
            element: "div",
            innerText: "+",
            className:
              "bg-black p-3 rounded-full w-12 text-center text-white text-[15px]",
          }),
        ],
      }),
      El({
        element:"div",
        className:"flex justify-between px-8 text-gray-500",
        children:[
          El({
            element:"div",
            className:"flex flex-col justify-center items-start",
            children:[
              El({
                element:"p",
                className:"",
                innerText:"Amount"
              }),
              El({
                element:"p",
                className:"",
                innerText:"Shipping"
              }),
              El({
                element:"p",
                className:"",
                innerText:"Total"
              }),
            ]
          }),
          El({
            element:"div",
            className:"flex flex-col justify-center items-end",
            children:[
              El({
                element:"p",
                className:"",
                innerText:"$585.00"
              }),
              El({
                element:"p",
                className:"",
                innerText:"-"
              }),
              El({
                element:"p",
                className:"",
                innerText:"-"
              }),
            ]
          })
        ]
      }),
      Link({
        href: "/payment",
        className: "",
        children: [
          El({
            element: "button",
            className:
              "bg-black text-white px-10 py-3 w-[90%] rounded-[30px] flex justify-center items-center gap-4 absolute bottom-4 left-6",
            children: [
              El({
                element: "span",
                className: "",
                innerText: "Continue to payment",
              }),
              El({
                element: "img",
                src: "./src/assets/svg/right-arrow3-1.svg",
                alt: "",
                className: "w-6",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
