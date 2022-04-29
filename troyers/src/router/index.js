import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactUs from "../views/ContactView.vue";
import MenuView from "../views/MenuView.vue";
import SpecialsView from "../views/SpecialsView.vue";
import TraysView from "../views/MeatandCheeseView.vue";

// import Report from "../views/ContactDev.vue";

import NotFound from "../views/404View.vue";
import PrivacyPolicy from "../views/PrivacyPolicyView.vue";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeView,
    meta: {
      title:
        "Bringing Holmes County to your Neighborhood | Troyer's Dutch Market",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      title: "About Us | Troyer's Dutch Market",
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "Contact Us | Troyer's Dutch Market",
    },
  },
  // {
  //   path: "/report",
  //   name: "Report",
  //   component: Report,
  //   meta: {
  //     title: "Report a Problem | Troyer's Dutch Market",
  //   },
  // },
  {
    path: "/menu",
    name: "Menu",
    component: MenuView,
    meta: {
      title: "Menu | Troyer's Dutch Market",
    },
  },
  {
    path: "/specials",
    name: "Specials",
    component: SpecialsView,
    meta: {
      title: "Specials | Troyer's Dutch Market",
    },
  },
  // {
  //   path: "/bakedgoods",
  //   name: "BakedGoods",
  //   component: BakedGoods,
  //   meta: {
  //     title: "Baked Goods | Troyer's Dutch Market",
  //   },
  // },
  // {
  //   path: "/bakedgoods/six-inch-pies",
  //   name: "sixPies",
  //   component: sixPies,
  //   meta: {
  //     title: "Six Inch Pies | Troyer's Dutch Market",
  //   },
  // },
  // {
  //   path: "/bakedgoods/nine-inch-pies",
  //   name: "ninePies",
  //   component: ninePies,
  //   meta: {
  //     title: "Nine Inch Pies | Troyer's Dutch Market",
  //   },
  // },
  // {
  //   path: "/bulkfood",
  //   name: "bulkFood",
  //   component: mainBulkFood,
  //   meta: {
  //     title: "Bulk Food | Troyer's Dutch Market",
  //   },
  // },
  {
    path: "/trays",
    name: "partyTrays",
    component: TraysView,
    meta: {
      title: "Meat and Cheese Party Trays | Troyer's Dutch Market",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    meta: {
      title: "404 - Page Not Found | Troyer's Dutch Market",
    },
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      title: "Privacy Policy | Troyer's Dutch Market",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

/***************************************************************************/
// Metadata Update Block
// This callback runs before every route change, including on page load.
// Updates page Metadata using info from @/router/index.js
router.beforeEach((to, from, next) => {
  // Timeout Function to Scroll To Top of window when Router View changes
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

// End of Metadata Update Block
/*******************************************************************/

export default router;