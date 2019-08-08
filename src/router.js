import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import findLast from "lodash/findLast";
import { check } from "./utils/auth";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "home主页",
        authority: ["admin", "user"]
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
        title: "menu页",
        authority: ["admin"]
      }
    },
    {
      path: "/menu1",
      name: "menu1",
      component: { render: h => h("div", "menu1") },
      meta: {
        title: "menu1"
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
          hideInMenu: true,
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
    },
    {
      path: "*",
      component: () => import("./views/404")
    },
    {
      path: "/403",
      component: { render: h => h("div", "403") }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    next({ path: "/403" });
  }
  next();
});

export default router;
