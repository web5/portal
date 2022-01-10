import {createWebHistory, createRouter} from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes:[
    {
      path:'/',
      component: Home,
      meta: {title: '首页/cfweb'}
    },{
      path:'/about',
      component: About,
      meta: {title: '关于/cfweb'}
    }
  ]
});

export default router;
