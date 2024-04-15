import { El } from "@/utils/El/El";


export function ButtonBrands() {
  const btnElemnt = El({
    element: "div",
    className: "home-filter",
    children: [
      brandMenu({brand:"All"}),
      brandMenu({brand:"Adidas"}),
      brandMenu({brand:"Nike"}),
      brandMenu({brand:"Puma"}),
      brandMenu({brand:"Asics"}),
      brandMenu({brand:"Converse"}),
      brandMenu({brand:"New Balance"}),
      brandMenu({brand:"Reebok"}),
    ],
  });
  return btnElemnt;
}
