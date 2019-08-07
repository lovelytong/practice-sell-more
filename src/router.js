import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "home主页"
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        title: "about页"
      }
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("./views/TestMenu"),
      meta: {
        title: "menu页"
      }
    },
    {
      path: "/menu1",
      name: "menu1",
      component: { render: h => h("div", "menu1") },
      meta: {
        title: "about页"
      }
    },
    {
      path: "/menu2",
      name: "menu2",
      component: { render: h => h("div", "menu2") },
      meta: {
        title: "menu2"
      }
    },
    {
      path: "/menu3",
      name: "menu3",
      component: { render: h => h("div", "menu3") },
      meta: {
        title: "menu3"
      }
    },
    {
      path: "/menu4",
      name: "menu4",
      component: { render: h => h("div", ["menu4", h("router-view")]) },
      meta: {
        title: "menu4"
      },
      children: [
        {
          path: "/menu4/menu4-1",
          name: "menu4-1",
          component: { render: h => h("div", ["menu4-1", h("router-view")]) },
          meta: {
            title: "menu4-1"
          },
          children: [
            {
              path: "/menu4/menu4-1/menu4-1-1",
              name: "menu4-1-1",
              component: { render: h => h("div", "menu4-1-1") },
              meta: {
                title: "menu4-1-1"
              }
            }
          ]
        },
        {
          path: "/menu4/menu4-2",
          name: "menu4-2",
          component: { render: h => h("div", "menu4-2") },
          meta: {
            title: "menu4-2"
          }
        },
        {
          path: "/menu4/menu4-3",
          name: "menu4-3",
          component: { render: h => h("div", "menu4-3") },
          meta: {
            title: "menu4-3"
          }
        },
        {
          path: "/menu4/menu4-4",
          name: "menu4-4",
          component: { render: h => h("div", "menu4-4") },
          meta: {
            title: "menu4-4"
          }
        }
      ]
    }
    // {
    //   path: "*",
    //   name: "any",
    //   component: () => import("./views/404")
    // }
  ]
});
