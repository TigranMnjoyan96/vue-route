import VueRouter from 'vue-router';
// import Home from './pages/Home.vue';
import Cars from './pages/Cars.vue';
import About from './pages/About.vue';
import Item from './pages/Item.vue';
import Error from './pages/Error.vue';


const Home = (resolve) => {
  require.ensure(['./pages/Home.vue'], () => {
    resolve(
      // eslint-disable-next-line global-require
      require('./pages/Home.vue'),
    );
  });
};


export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
      name: 'home',
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:id',
      component: Item,
      children: [
        {
          path: 'full',
          component: Cars,
          name: 'fullCar',
        },
      ],
    },
    {
      path: '/none',
      redirect: {
        name: 'name',
      },
    },
    {
      path: '*',
      component: Error,
    },
  ],
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return {
      x: 0,
      y: 0,
    };
  },
});
