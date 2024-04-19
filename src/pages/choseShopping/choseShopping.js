
import { InputCheckWallet } from "@/components/Input/InputCheckShopp";
import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";


export function choseShopping() {
  return El({
    element: "div",
    className: "p-6",
    children: [
      El({
        element: "div",
        className: "mb-6 flex justify-between",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-5",
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
                element: "span",
                className: "font-bold text-black",
                innerText: "Choose Shipping",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "form",
        children: [
          InputCheckWallet({
            src: "../../../src/assets/img/delivered-box-verification-symbol-svgrepo-com.svg",
            text: "Economy",
            alt: "icon Economy",
            className: "w-10 ",
            price: "$10",
            description:"Estimated Arrival,Dec 20-23"
          }),
          InputCheckWallet({
            src: "./src/assets/svg/delivery-package-svgrepo-com.svg",
            text: "Regular",
            alt: "icon Regular",
            className: "w-10",
            price: "$15",
            description:"Estimated Arrival,Dec 20-22"
          }),
          InputCheckWallet({
            src: "../../../src/assets/img/truck-svgrepo-com.svg",
            text: "Cargo",
            alt: "icon Cargo",
            className: "w-10",
            price: "$20",
            description:"Estimated Arrival,Dec 19-20"
          }),
          InputCheckWallet({
            src: "../../../src/assets/img/logistics-delivery-truck-in-movement-svgrepo-com.svg",
            text: "Express",
            alt: "icon Express",
            className: "w-10",
            price: "$30",
            description:"Estimated Arrival,Dec 18-19"
          }),
        ],
      }),
      Link({
        href: "/checkout",
        className: "",
        children: [
          El({
            element: "button",
            className:
              "flex justify-center items-center text-center w-[90%] border p-2 rounded-full bg-black text-white text-xl absolute bottom-5",
            innerText: "Apply",
          }),
        ],
      }),
    ],
  });
}
