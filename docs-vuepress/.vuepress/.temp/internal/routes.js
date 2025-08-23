export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/api.html", { loader: () => import(/* webpackChunkName: "api.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/api.html.js"), meta: {"title":"编程接口"} }],
  ["/cli.html", { loader: () => import(/* webpackChunkName: "cli.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/cli.html.js"), meta: {"title":"命令行工具"} }],
  ["/configuration.html", { loader: () => import(/* webpackChunkName: "configuration.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/configuration.html.js"), meta: {"title":"配置参考"} }],
  ["/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/installation.html.js"), meta: {"title":"安装"} }],
  ["/quick-start.html", { loader: () => import(/* webpackChunkName: "quick-start.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/quick-start.html.js"), meta: {"title":"快速开始"} }],
  ["/troubleshooting.html", { loader: () => import(/* webpackChunkName: "troubleshooting.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/troubleshooting.html.js"), meta: {"title":"故障排除"} }],
  ["/typescript.html", { loader: () => import(/* webpackChunkName: "typescript.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/typescript.html.js"), meta: {"title":"TypeScript 类型安全工具"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
