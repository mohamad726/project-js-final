import { El } from '../../utils/El/El';

export const loading = () => {
  return El({
    element: 'img',
    src:'../../../src/assets/img/spinner-atom.svg',
    className: 'loader',
  });
};
