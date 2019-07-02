import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '../components/HelloWorld';
import HelloSis from '../components/HelloSis';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld,
    },
    {
      path: '/sis/',
      name: 'sis',
      component: HelloSis,
    },
  ],
});
