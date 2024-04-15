import { El } from '../../utils/El/El';

export const Label = (Text,Class) => {
  ///const isFor = forinput ? forinput : '';

  return El({ element: 'label',
  className: Class ,
   innerText: Text,
});
};
