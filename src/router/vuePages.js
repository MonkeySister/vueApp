export default [
  {
    path: "/vuePages",
    name: "vuePages",
    redirect: "/transitionPage",
    component: () => import("@/views/vuePages/index"),
    children: [
      {
        path: "/transitionPage",
        name: "transitionPage",
        component: () => import("@/views/vuePages/transition/index"),
      },
      // {
      //   path: "/slotTest",
      //   name: "slotTest",
      //   component: () => import("@/views/vuePages/pages/slotTest"),
      // },
    ],
  },
]
