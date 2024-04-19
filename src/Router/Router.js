
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
import { ProdutPage } from '@/pages/ProdutPage/ProdutPage';
import { ProfilePage } from '@/pages/ProfilePage/ProFilePage';
import { cartPage } from '@/pages/Cart/Cart';
import { SearchPage } from '@/pages/search/search';
import { paymentPage } from '@/pages/payment/paymentPage';
import { OrderPageActive } from '@/pages/order/orderPageActive';
import { OrderPageComplete } from '../pages/order/orderPageCompelate';
import { wishlistPage } from '@/pages/wishlistPage/wishlistPage';
import { CheckoutPage } from '@/pages/checkout/checkout';
import { AddressPage } from '@/components/address/AddressPage';
import { choseShopping } from '@/pages/choseShopping/choseShopping';



const changePage = (page,data) => {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.append(page(data));
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

    .on("/singleProduct/:id", ({ data }) => changePage(ProdutPage,data)
    
  )
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

    .on("/profile", () => {
      changePage(ProfilePage);
    })
    .on("/cart", () => {
      changePage(cartPage);
    })
    .on("/search", () => {
      changePage(SearchPage);
    })
    .on("/payment", () => {
      changePage(paymentPage);
    })
    .on("/orders_Active", () => {
      changePage(OrderPageActive);
    })
    .on("/orders_complete", () => {
      changePage(OrderPageComplete);
    })
    .on("/wishlistPage", () => {
      changePage(wishlistPage);
      
    })
    .on("/checkout", () => {
      changePage(CheckoutPage);
    })
    .on("/address", () => {
      changePage(AddressPage);
    })
    .on("/choseShopping", () => {
      changePage(choseShopping);
    })
  return router;
};
