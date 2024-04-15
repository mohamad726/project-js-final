import { El } from "../../utils/El/El";

export const button = ({Brand}) => {
 const button= El({
    element: 'button',
    className:
      'hover:bg-black hover:text-white  py-1.5 px-4 border-black border rounded-full mr-2 transition-all duration-400	',
    innerText:Brand,
  });
button.addEventListener('click',(e)=>{
    let filterBrand=e.target.innerText.toLowerCase();
    console.log(filterBrand);

    let productsFilter=renderProducts(filterBrand);
    const carts=document.getElementById('carts');
    //carts.append(productsFilter)
})
return button
};

