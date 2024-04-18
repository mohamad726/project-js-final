import { Link } from "@/components/Link/Link";
import { El } from "@/utils/El/El";

export function Footer() {
  return El({
    element: "div",
    className:
      "w-full bg-white fixed bottom-0 z-10 left-0 flex justify-items-center justify-around hover:border-t-2 pt-2 ",
    children: [
      Link({
        href: "/getstart",
        className: "",
        children: [
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/Home.svg",
            alt: "icon home",
          }),
        ],
      }),
      Link({
        href: "/cart",
        className: "",
        children: [
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/Cart.svg",
            alt: "icon cart",
          }),
        ],
      }),
      Link({
        href: "/orders_Active",
        className: "",
        children: [
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/Orders.svg",
            alt: "icon orders",
          }),
        ],
      }),
      Link({
        href: "/payment",
        className: "",
        children: [
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/Wallet.svg",
            alt: "icon wallet",
          }),
        ],
      }),
      Link({
        href: "/profile",
        className: "",
        children: [
          El({
            element: "img",
            className: "",
            src: "../../../src/assets/img/profile.svg",
            alt: "icon profile",
          }),
        ],
      }),
    ],
  });
}
