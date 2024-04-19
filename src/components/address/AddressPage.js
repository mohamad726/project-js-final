
import { El } from "@/utils/El/El";
import { Link } from "../Link/Link";
import { ChooseAdders } from "../ChooseAddersCheckOut/ChooseAdders";


export function AddressPage() {
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
                innerText: "Shipping Address",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "form",
        children: [
          ChooseAdders({
            src: "../../../src/assets/img/location-services-active-svgrepo-com.svg",
            text: "Home",
            alt: "icon location",
            className: "w-12 bg-gray-200 p-1 rounded-full",
            description: "61480 Sunbrook Park,PC 5679",
          }),
          ChooseAdders({
            src: "../../../src/assets/img/location-services-active-svgrepo-com.svg",
            text: "Office",
            alt: "icon location",
            className: "w-12 bg-gray-200 p-1 rounded-full",
            description: "6993 Meadow Valley Terra,PC 4662",
          }),
          ChooseAdders({
            src: "../../../src/assets/img/location-services-active-svgrepo-com.svg",
            text: "Apartment",
            alt: "icon location",
            className: "w-12 bg-gray-200 p-1 rounded-full",
            description: "21833 Clyde Gallagher,PC 4662",
          }),
          ChooseAdders({
            src: "../../../src/assets/img/location-services-active-svgrepo-com.svg",
            text: "Parent's House",
            alt: "icon location",
            className: "w-12 bg-gray-200 p-1 rounded-full ",
            description: "5259 Blue Bill Park,PC 4627",
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "flex justify-center items-center text-center w-full border p-2 rounded-full bg-gray-200 text-black font-bold text-xl hover:bg-black hover:text-white ",
        innerText: "Add New Address",
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
