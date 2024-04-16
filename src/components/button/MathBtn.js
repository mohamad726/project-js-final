import { El } from "@/utils/El/El";


export function IncreaseBtn(){
  return El({
    element: "p",
    className:"font-medium text-4xl",
   innerText:"+"
  });
}
export function DecreaseBtn(){
    return El({
      element: "p",
      className:"font-semibold text-5xl",
     innerText:"-"
    });
  }