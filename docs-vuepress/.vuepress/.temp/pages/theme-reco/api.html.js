import comp from "F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/theme-reco/api.html.vue"
const data = JSON.parse("{\"path\":\"/theme-reco/api.html\",\"title\":\"api\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"api\",\"date\":\"2020-05-29T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"Hello VuePress2222222222\",\"slug\":\"hello-vuepress2222222222\",\"link\":\"#hello-vuepress2222222222\",\"children\":[{\"level\":3,\"title\":\"Hello VuePress444444444444\",\"slug\":\"hello-vuepress444444444444\",\"link\":\"#hello-vuepress444444444444\",\"children\":[]}]},{\"level\":2,\"title\":\"Hello VuePress55555555555\",\"slug\":\"hello-vuepress55555555555\",\"link\":\"#hello-vuepress55555555555\",\"children\":[]}],\"git\":{\"updatedTime\":1720778229000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"theme-reco/api.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
