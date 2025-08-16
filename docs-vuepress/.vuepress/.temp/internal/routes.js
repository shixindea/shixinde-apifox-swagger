export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/theme-reco/check-validate.html", { loader: () => import(/* webpackChunkName: "theme-reco_check-validate.html" */"F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/theme-reco/check-validate.html.js"), meta: {"title":"校验规则"} }],
  ["/theme-reco/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html", { loader: () => import(/* webpackChunkName: "theme-reco_快速上手.html" */"F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/theme-reco/快速上手.html.js"), meta: {"title":"快速上手"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
