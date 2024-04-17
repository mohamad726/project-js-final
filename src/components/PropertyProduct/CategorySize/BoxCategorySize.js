import { El } from "@/utils/El/El";
import { CategorySize } from "./CategorySize";
export function BoxCategorySize(sizes){

    const Element = El({
        element:'div',
        className:'flex gap-3',
        id:'CategorySize',
        children:sizes.map((item)=> CategorySize({sizeCircle:item}))
    });
return Element
}