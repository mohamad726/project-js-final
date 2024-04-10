const changePage = (page) => {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.append(page());
};


let router = new Navigo("/");
export const Router = () => {
  router
    .on(ROUTE.home, () => {
      changePage(HomePage);
    })
    .on(ROUTE.cart, () => {
      changePage(CartPage);
    })
    .on(ROUTE.notFound, () => {
      changePage(NotFoundPage);
    });
  return router;
};