import { getLocalStorage } from "@/utils/localStorage/getLocalStorage";
import { OneCommentSearch } from "./OneCommentSearch";

export function RenderSearch() {
    const searchedItem = getLocalStorage("searched");
  
    const textSearch = searchedItem.map((item) => OneCommentSearch(item));
  
    return textSearch;
  }
  
  