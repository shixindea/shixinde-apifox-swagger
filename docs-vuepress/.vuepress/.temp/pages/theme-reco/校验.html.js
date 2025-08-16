import comp from "F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/校验.html.vue"
const data = JSON.parse("{\"path\":\"/theme-reco/%E6%A0%A1%E9%AA%8C.html\",\"title\":\"api\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"api\",\"date\":\"2020-05-29T00:00:00.000Z\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"theme-reco/校验.md\"}")
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
