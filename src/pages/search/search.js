
import { NotFound } from "@/components/Search/NotFound";
import { RenderCard } from "@/components/Search/RenderCard";

import { RenderSearch } from "@/components/Search/RenderSearch";
import { Footer } from "@/layout/footer/footer";
import { El } from "@/utils/El/El";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage/getLocalStorage";
import debounce from "debounce";

export function SearchPage() {
  function handleInputChange() {
    const inputElement = document.getElementById("inputSearch");
    document.getElementById(
      "contSearch"
    ).innerText = `Result for "${inputElement.value}"`;

    if (inputElement.value == "") {
      const renderSearch = document.getElementById("renderSearch");
      renderSearch.innerHTML = "";
      renderSearch.append(...RenderSearch());
      RenderCard()
    } else {
      RenderCard()
      setLocalStorage("searched", [
        inputElement.value,
        ...getLocalStorage("searched"),
      ]);
    }
  }

  function clearAll() {
    setLocalStorage("searched", []);
    const renderSearch = document.getElementById("renderSearch");
    renderSearch.innerHTML = "";
    renderSearch.append(...RenderSearch());
  }
  return El({
    element: "div",
    className: "p-4 mt-3",
    children: [
      El({
        element: "div",
        className: "flex flex-col gap-4 outline-none w-full",
        children: [
          El({
            element: "input",
            className: "border relative pl-7 h-9 rounded bg-gray-100 mt-2",
            type: "search",
            placeholder: "Search",
            id: "inputSearch",
            eventListener: [
              { event: "input", callback: debounce(handleInputChange, 1000) },
            ],
          }),
          El({
            element: "img",
            src: "../../../src/assets/img/search.svg",
            className: "absolute top-[46px] ml-2",
            alt: "icon Search",
          }),
          El({
            element: "img",
            src: "../../../src/assets/img/Filter 1.svg",
            className: "absolute top-[42px] left-[375px] ml-2",
            alt: "icon Filter",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-between items-center text-center hidden",
        children: [
          El({
            element: "h2",
            className: "text-xl font-bold",
            id: "contSearch",
          }),
          El({
            element: "h2",
            className: "font-bold text-lg",
            innerText: "0 Found",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-between items-center text-center ",
        children: [
          El({
            element: "h2",
            className: "text-xl font-bold",
            id: "recent",
            innerText: "recent",
          }),
          El({
            element: "h2",
            className: "font-bold text-lg",
            innerText: "Clear All",
            onclick: clearAll,
          }),
        ],
      }),
      El({
        element: "div",
        className: "",
        id: "renderSearch",
        children: [...RenderSearch()],
      }),
      El({
        element: "div",
        className: "grid grid-cols-2 gap-4 pb-8 md:grid-cols-3 lg:grid-cols-4",
        id: "cardsApi",
      }),
      NotFound(),
      Footer(),
    ],
  });
}
