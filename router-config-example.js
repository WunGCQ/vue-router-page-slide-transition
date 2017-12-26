import Vue from 'vue';
import Router from 'vue-router';
import PageA from '@/pages/A.vue';
import PageB from '@/pages/B.vue';

/*
your page structure: 
______________
|   PageA    |
|____________|
|   PageB    |
|____________|

*/

export const routes = new Router({
  routes: [
    {
      path: '/a',
      name: 'a',
      component: PageA,
      meta: {
        index: 0,
      }
    },
    {
      path: '/b',
      name: 'b',
      component: PageB,
      meta: {
        index: 1,
      }
    },
  ]
})
