import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: '/dc-heroes',
    component: () => import('../views/DcHeroes.vue'),
    meta: { title: 'Dc Heroes' }
  },
  {
    path: '/calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
    meta: { title: 'Calendar' }
  },
  {
    path: '/markdown',
    component: () => import('../views/Markdown.vue'),
    meta: { title: 'Markdown' }
  },
  {
    path: '/slider-carousel',
    component: () => import('../views/Slider.vue'),
    meta: { title: 'Slider Carousel' }
  },
  {
    path: '/calculator',
    component: () => import('../views/Calculator.vue'),
    meta: { title: 'Calculator', middleware: 'auth' }
  },
  {
    path: '/reuseable-modal',
    component: () => import('../views/ReuseableModal.vue'),
    meta: { title: 'Reuseable Modal' }
  },
  {
    path: '/chat',
    component: () => import('../views/Chat'),
    meta: { title: 'Chat', middleware: 'auth' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {

  if (to.meta.middleware) {
    const middleware = require(`../${to.meta.middleware}`)
    if(middleware) {
      middleware.default(next, store)
    } else {
      next()
    }
  }

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...




export default router
