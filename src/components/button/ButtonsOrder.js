import { El } from "@/utils/El/El";


export function Buttonorder({ text, className = "", ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:
      "bg-black text-white px-[15px] py-[5px] w-fit rounded-[30px] absolute bottom-[5px] right-[5px]" +
      className,
    ...rest,
  });
}
