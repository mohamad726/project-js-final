import { getProductById } from '@/api/get-api/get-api';
import { singleProductPage } from '@/components/singleProduct/singleProductPage';

import { El } from '@/utils/El/El';

export function ProdutPage(data) {
  const productID = data.id;


  const parent = El({
    element: 'div',
    id: 'parentProduct',
    children: [],
  });
  getProductById(productID).then((product) => {
    parent.append(singleProductPage({ product }));

  });
  return parent;
}
