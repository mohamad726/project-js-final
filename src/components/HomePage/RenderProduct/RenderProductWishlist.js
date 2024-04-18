


import { El } from '@/utils/El/El';
import { productItem } from '../ProductItem/ProductItem';
import { getProductWshlist } from '@/api/get-api/get-api';


export function RenderProductWishlist(brand) {
  if (!brand) {
    brand = 'ALL';
  }
  const render = El({
    element: 'div',
    id: 'renderweshlist',
    className: 'section-product',
  });
  getProductWshlist(brand).then((products) => {
    products.map((product) => {
      const productCard = productItem({ product });
      render.append(productCard);
    });
  });
  return render;
}
