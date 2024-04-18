import { Router } from "@/Router/Router";
import { InputCheck } from "@/components/Input/InputCheckWallet";
import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";


export function paymentPage() {
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
                alt: "icon back",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                        Router().navigate('/getstart');
                     //window.history.back();
                    },
                  },
                ],
              }),
              El({
                element: "span",
                className: "font-bold text-black font-[cursive]",
                innerText: "Payment Methods",
              }),
            ],
          }),
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/Add Square.svg",
            alt: "",
          }),
        ],
      }),
      El({
        element: "p",
        className: "mb-5",
        innerText: "Select the Payment Methods you want to use",
      }),
      El({
        element: "form",
        children: [
          InputCheck({
            src: "../../../src/assets/img/wallet-svgrepo-com.svg",
            text: "My Wallet",
            alt: "icon Wallet",
            className: "w-10",
            price: "$9.379",
          }),
          InputCheck({
            src: "../../../src/assets/img/paypal-svgrepo-com.svg",
            text: "PayPal",
            alt: "icon PayPal",
            className: "w-10",
            price: "",
          }),
          InputCheck({
            src: "../../../src/assets/img/google-color-svgrepo-com.svg",
            text: "Google Pay",
            alt: "icon Google pay",
            className: "w-10",
            price: "",
          }),
          InputCheck({
            src: "../../../src/assets/img/apple-173-svgrepo-com.svg",
            text: "Apple Pay",
            alt: "icon Apple Pay",
            className: "w-10",
            price: "",
          }),
          InputCheck({
            src: "../../../src/assets/img/mastercard-svgrepo-com.svg",
            text: ".... .... .... .... 4679",
            alt: "icon Master Card",
            className: "w-10",
            price: "",
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
              "flex justify-center items-center text-center w-[90%] border p-2 rounded-full bg-black text-white text-xl absolute bottom-5 font-[cursive]",
            innerText: "Confirm Payment",
          }),
        ],
      }),
    ],
  });
}
