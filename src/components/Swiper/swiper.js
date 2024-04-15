import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { El } from '../../utils/El/El';
//import { landing } from '../../pages/onboarding/page2/onboarding-page2';
import { SliderFirstApp } from '../../pages/onboarding/page3/onboarding-page3';
import { Router } from '../../Router/Router';

const createSwiper = () => {
  const SwiperFunc = new Swiper('.swiper', {
    // Optional parameters
    // spaceBetween: 20,
    //speed: 900,
    allowTouchMove: false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
};

export function swiperContainer() {
  setTimeout(createSwiper, 0);
  return El({
    element: 'div',
    className:'w-screen ',
    children: [
      El({
        element: 'div',
        className: 'swiper',
        children: [
          El({
            element: 'div',
            className: 'swiper-wrapper mb-10',
            children: [
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  SliderFirstApp(
                    '../../../../src/assets/img/WallpaperDog-20534536 1.png',
                    'We provide high quality   products just for you'
                  ),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  SliderFirstApp(
                    '../../../../src/assets/img/WallpaperDog-20397673 1.png',
                    'We provide high quality   products just for you'
                  ),
                ],
              }),
              El({
                element: 'div',
                className: 'swiper-slide',
                children: [
                  SliderFirstApp(
                    '../../../../src/assets/img/WallpaperDog-20534715 1.png',
                    'We provide high quality   products just for you '
                  ),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'swiper-pagination ',
          }),
        ],
      }),
      El({
element:'div',
className:'w-screen flex justify-center',
children:[
  El({
    element: 'button',
    innerText: 'Next',
    className:
      'bg-gray-800 w-[90%]   text-white box-border rounded-full p-3 text-center itmes-center hover:bg-black ',
      eventListener: [{ event: 'click', callback:NextSlide }]
  })
]
      }),
    ],
  });
}

let slide=0
//
let NextSlide = () => {
  let swiper = document.querySelector(".swiper").swiper;
 ++slide

  swiper.slideNext();
  if (slide===(swiper.slides.length-1)) {
    
    // Change the button text to "Hello" when on the last slide
    document.querySelector("button").innerText = "Get Started";
  }
  if (slide===(swiper.slides.length)) {
    Router().navigate('/login');
    slide=0
  }
};
