import {createWebHistory, createRouter} from 'vue-router';

import Portal from '../views/portal/Index.vue';
import Home from '../views/portal/Home.vue';
import About from '../views/portal/About.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes:[
    {
      path:'/',
      redirect: '/portal/home',
    },
    {
      path:'/portal',
      component: Portal,
      redirect: '/portal/home',
      children: [
        {
          path:'/portal/home',
          component: Home,
          meta: {title: '首页/cfweb'}
        },{
          path:'/portal/about',
          component: About,
          meta: {title: '关于/cfweb'}
        }
      ]
    },
  ]
});

export default router;
