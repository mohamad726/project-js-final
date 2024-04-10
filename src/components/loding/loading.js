import { El } from '../../utils/El/El';

export const loading = () => {
  return El({
    element: 'div',
    className: 'loader',
  });
};
