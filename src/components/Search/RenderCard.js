import { getItemBySearch } from '@/api/get-api/get-api';
import { cardItemSearch } from './cardItemSearch';
export function RenderCard() {
  const cardsApi = document.getElementById('cardsApi');
  const notFound = document.getElementById('notFound');
  const inputElement = document.getElementById('inputSearch').value;
  cardsApi.innerHTML = '';
  getItemBySearch(inputElement).then((data) => {
    const cardsApi = document.getElementById('cardsApi');
    console.log(data);
    data.map((product) => {
      console.log(product);
      const cardSearch = cardItemSearch({ product });
      return cardsApi.append(cardSearch);
    });

    if (Object.prototype.hasOwnProperty.call(data, 'length')) {
      console.log(data.length);
      //   const countData = document.getElementById("countData");
      //   countData.innerText = `${data.length} found`;
      if (data.length == 0) {
        notFound.classList.remove('hidden');
        console.log(data.length);

        console.log('0');
      } else if (data.length != 0) {
        console.log(data.length);
        notFound.classList.add('hidden');
      }
    }
    // console.log(data);
    // const valueInput = document.getElementById("valueInput");
    // valueInput.innerText = `"${inputElement}"`;

    // const parentTitle = document.getElementById("parentTitle");
    const renderSearch = document.getElementById('renderSearch');
    // const headerSearchApi = document.getElementById("headerSearchApi");
    if (inputElement == '') {
      const cardsApi = document.getElementById('cardsApi');
      cardsApi.innerHTML = '';
      renderSearch.classList.remove('hidden');
      //   parentTitle.classList.remove("hidden");
      //   headerSearchApi.classList.add("hidden");
    } else {
      renderSearch.classList.add('hidden');
      //   parentTitle.classList.add("hidden");
      //   headerSearchApi.classList.remove("hidden");
    }
  });
}
