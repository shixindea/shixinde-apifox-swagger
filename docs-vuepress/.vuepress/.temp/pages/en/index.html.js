import comp from "/Users/guoguo/code/my-project/shixinde-apifox-swagger/docs-vuepress/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1755308058000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"en/README.md\",\"excerpt\":\"\\n<div class=\\\"language-typescript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"ts\\\" data-title=\\\".vuepress/config.ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"line\\\"><span class=\\\"token doc-comment comment\\\">/**</span>\\n<span class=\\\"line\\\"> * Phone number verification</span>\\n<span class=\\\"line\\\"> */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">declare</span> <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">mobileCheck</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span>value<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token builtin\\\">boolean</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
