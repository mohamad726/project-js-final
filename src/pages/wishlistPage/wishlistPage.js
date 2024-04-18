import { El } from "@/utils/El/El";
import { MostPopularwishlist } from "../MostPopular/MostPopularwishlist";

export function wishlistPage(){
    const wishlist=El({
        element:'div',
        className:'w-screen w-screen bg-gray-100',
        children:[
         MostPopularwishlist()
        ]
    })


    return wishlist
}