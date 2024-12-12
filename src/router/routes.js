const routes = [
  {
    path: "/",
    component: () => import("src/pages/Homepage/Home.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/Residencial",
    component: () => import("src/pages/Homepage/circulos/Residencial.vue"),
  },
  {
    path: "/Comercial",
    component: () => import("src/pages/Homepage/circulos/Comercial.vue"),
  },
  {
    path: "/Industrial",
    component: () => import("src/pages/Homepage/circulos/Industrial.vue"),
  },
  {
    path: "/Servicos",
    component: () => import("src/pages/Serviços/Serviços.vue"),
  },
  {
    path: "/Sobre",
    component: () => import("src/pages/Sobre/Sobre.vue"),
  },
  {
    path: "/Contato",
    component: () => import("src/pages/Contato/Contato.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
