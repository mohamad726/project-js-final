import {
  getLocalStorage,
  setLocalStorage,
} from '@/utils/localStorage/getLocalStorage';

import { El } from '@/utils/El/El';
import { RenderSearch } from './RenderSearch';

export function OneCommentSearch(name) {
  function deleteData(e) {
    const nameData = e.target.closest('#parent-data').children[0].innerText;
    const items = getLocalStorage('searched');
    const newItem = items.filter((item) => item !== nameData);

    setLocalStorage('searched', newItem);
    const renderSearch = document.getElementById('renderSearch');
    renderSearch.innerHTML = '';
    renderSearch.append(...RenderSearch());
  }
  return El({
    element: 'div',
    className: 'flex justify-between mx-[24px] my-4',
    id: 'parent-data',
    children: [
      El({
        element: 'div',
        className: 'text-gray-600 font-medium',
        innerText: name,
      }),
      El({
        element: 'img',
        className: '',
        src: '../../../src/assets/img/Add Square.svg',
        onclick: deleteData,
      }),
    ],
  });
}
