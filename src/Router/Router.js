
import { StartApp } from '../pages/SartApp/StartApp';
import { OnboardingPage } from '../pages/onboarding/page1/onboarding-page1';
import Navigo from 'navigo';
import { landing } from '../pages/welcomtoshoea/welcomto';
import { Login } from '../pages/login/login';
import { ShoppingHome } from '@/pages/shop/ShoppingHome';
import { MostPopular } from '@/pages/MostPopular/MostPopular';
import { NikePage } from '@/pages/BrandPage/NikePage';
import { AdidasPage } from '@/pages/BrandPage/AdidasPage';
import { PumaPage } from '@/pages/BrandPage/PumaPage';
import { ReebokPage } from '@/pages/BrandPage/ReebokPage';

import{NewBalancePage}from '@/pages/BrandPage/NewBalancePage'
import { ConversePage } from '@/pages/BrandPage/ConversePage';
import { MorePage } from '@/pages/BrandPage/MorePage';
import { AsicsPage } from '@/pages/BrandPage/AsicPage';



const changePage = (page) => {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.append(page());
};

let router = new Navigo('/');
export const Router = () => {
  router
    .on('/', () => {
      // اضافه کردن صفحه Home به DOM
      changePage(OnboardingPage);
      
      setTimeout(() => {
        router.navigate('/welcom');
      }, 3000);
    
    })
    .on('/welcom', () => {
      
      // اضافه کردن صفحه CartPage به DOM
      changePage(landing);
      setTimeout(() => {
        router.navigate('/startapp');
      }, 3000);
    })
    .on('/startapp', () => {
      // اضافه کردن صفحه CartPage به DOM
      changePage(StartApp);
    })
    .on('/login', () => {
      // اضافه کردن صفحه CartPage به DOM
      changePage(Login);
    })
    .on('/getstart', () => {
      // اضافه کردن صفحه CartPage به DOM
      changePage(ShoppingHome);
    })
    .on("/allProduct", () => {
      changePage(MostPopular);
    })
    .on("/Nike_Product", () => {
      changePage(NikePage);
    })
    .on("/Adidas_Product", () => {
      changePage(AdidasPage);
    })
    .on("/Puma_Product", () => {
      changePage(PumaPage);
    })
    .on("/Adidas_Product", () => {
      changePage(AdidasPage);
    })
    .on("/Reebok_Product", () => {
      changePage(ReebokPage);
    })
    .on("/NewBalance_Product", () => {
      changePage(NewBalancePage);
    })
    .on("/Converse_Product", () => {
      changePage(ConversePage);
    })
    .on("/AllPage_Product", () => {
      changePage(MorePage);
    })
    .on("/Asics_Product", () => {
      changePage(AsicsPage);
    })
  return router;
};
