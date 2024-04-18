import { El } from "@/utils/El/El";

;
export function Button({ text, className = "", ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:
      "rounded-md text-center block w-full p-2 bg-gray-400  text-white hover:bg--600 " ,
      className,
    ...rest,
  });
}
