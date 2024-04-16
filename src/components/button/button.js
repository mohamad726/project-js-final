import { El } from "@/utils/El/El";

;
export function Button({ text, className = "", ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:
      "rounded-md text-center block w-full p-2 bg-red-500 text-white hover:bg-red-600 " +
      className,
    ...rest,
  });
}
