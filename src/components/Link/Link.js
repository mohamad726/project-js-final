import { Router } from "@/Router/Router";
import { El } from "@/utils/El/El";



export function Link({ href, ...rest }) {
  return El({
    element: "a",
    href,
    eventListener: [
      {
        event: "click",
        callback: (event) => {
         event.preventDefault();
          Router().navigate(href);
        },
      },
    ],
    ...rest,
  });
}