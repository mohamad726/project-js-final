
import { Router } from './src/Router/Router.js';
import './src/assets/style/style.css';
// // import { HomePage1 } from './src/Home/Home-page-1/Home-page-1';
// import { Router } from './src/Router/Router.js';
// import { swiperContainer } from './src/components/Swiper/swiper.js';
// // import { ElementSwiper } from './src/components/Swiper/ElementSwiper/ElementSwiper';
// // import { SwiperSlide } from './src/components/Swiper/swiper';
// // import { OnboardingPage } from './src/pages/onboarding/page1/onboarding-page1';
// // import { landing } from './src/pages/onboarding/page2/onboarding-page2';
// // import { SliderFirstApp } from './src/pages/onboarding/page3/onboarding-page3';

// // //HomePage1()
// // //SliderFirstApp()
// // //OnboardingPage()
// // ///landing()
// document.querySelector('#app').append(router())

Router().navigate('/Login')

// eventListener: [
//     {
//     event: "click",
//     callback: () => {
//     const checkBox = document.getElementById(
//     "remember-me-checkbox"
//     ).checked;
//     if (checkBox){
//     Cookies.set("isLogin", true , { expires: 7 });
//     }