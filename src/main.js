import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import SingleProductPage from "./components/SingleProductPage.vue";
import ProductPage from "./components/ProductPage.vue";
import errorPage from "./components/ErrorPage.vue"

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: ProductPage,
    props: true,
  },
  {
    path: "/product/:id_product",
    component: SingleProductPage,
  },
  {
    path: "/:pageNotFound(.*)",
    component: errorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
