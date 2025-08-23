<template><div><br />
<br />
<br />
<br />
<p align="center">
  <a href="https://github.com/shixinde/apifox-swagger/">
       <img src="@source/.vuepress/public/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">@shixinde/apifox-swagger</h3>
  <p align="left" style="text-indent:2em">
   一个强大的 Apifox API 文档导出工具，支持将 Apifox 项目导出为 Swagger JSON 和 TypeScript 类型定义。提供命令行工具和编程接口，让 API 文档管理变得简单高效。
 </p>
  <p align="left" style="text-indent:2em">
  支持多种导出方式：云端项目导出、本地客户端导出、模块化导出等。生成的 TypeScript 类型定义具有完整的类型安全保障，让前端开发更加可靠。
 </p>
<p>让 API 文档管理变得简单，让类型安全成为开发标准！
<a href="./quick-start"><strong>快速开始 »</strong></a>
<br />
<br />
<a href="./installation">安装指南</a>
·
<a href="https://www.npmjs.com/package/@shixinde/apifox-swagger">NPM 包</a>
·
<a href="./cli">命令行工具</a>
·
<a href="https://github.com/shixinde/apifox-swagger/issues">报告 Bug</a>
·
<a href="https://github.com/shixinde/apifox-swagger/issues">提出新特性</a></p>
</p>
<br />
<br />
<br />
<!-- PROJECT LOGO -->
<br />
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a>
<ul>
<li><a href="#%E7%AE%80%E4%BB%8B">简介</a></li>
<li><a href="#%E7%89%B9%E6%80%A7">特性</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B">快速开始</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85">安装</a></li>
<li><a href="#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">基本使用</a></li>
</ul>
</li>
<li><a href="#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97">使用指南</a></li>
<li><a href="#%E9%85%8D%E7%BD%AE">配置</a></li>
<li><a href="#%E8%B4%A1%E7%8C%AE">贡献</a></li>
<li><a href="#%E7%9B%B8%E5%85%B3%E9%A1%B9%E7%9B%AE">相关项目</a></li>
<li><a href="#%E8%AE%B8%E5%8F%AF%E8%AF%81">许可证</a></li>
<li><a href="#%E4%BD%9C%E8%80%85">作者</a></li>
</ul>
</li>
</ul>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3>
<p>@shixinde/apifox-swagger 是一个专为 Apifox 用户设计的 API 文档导出工具。它可以将 Apifox 项目中的 API 文档导出为标准的 Swagger JSON 格式和 TypeScript 类型定义文件，让前端开发者能够享受完整的类型安全保障。</p>
<p>该工具支持云端和本地两种导出方式，提供了灵活的配置选项和强大的 TypeScript 类型工具，是现代前端开发的理想选择。</p>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3>
<ul>
<li>🚀 <strong>多种导出方式</strong> - 支持云端项目和本地客户端导出</li>
<li>📦 <strong>模块化导出</strong> - 支持按文件夹分模块导出，便于大型项目管理</li>
<li>🔧 <strong>命令行工具</strong> - 提供简单易用的 CLI 工具</li>
<li>💻 <strong>编程接口</strong> - 支持在 Node.js 项目中编程调用</li>
<li>🎯 <strong>TypeScript 支持</strong> - 生成完整的类型定义，享受类型安全</li>
<li>⚡ <strong>高性能</strong> - 支持并行导出和缓存机制</li>
<li>🔄 <strong>CI/CD 集成</strong> - 完美支持各种持续集成环境</li>
<li>📝 <strong>丰富配置</strong> - 灵活的配置选项满足不同需求</li>
</ul>
<h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 使用 npm</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @shixinde/apifox-swagger</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 yarn</span></span>
<span class="line"><span class="token function">yarn</span> global <span class="token function">add</span> @shixinde/apifox-swagger</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 pnpm</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> @shixinde/apifox-swagger</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 导出 Apifox 项目</span></span>
<span class="line">apifox-swagger <span class="token builtin class-name">export</span> --project-id YOUR_PROJECT_ID <span class="token parameter variable">--token</span> YOUR_ACCESS_TOKEN</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看帮助</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多详细信息请查看 <RouteLink to="/quick-start.html">快速开始指南</RouteLink>。</p>
<h3 id="使用指南" tabindex="-1"><a class="header-anchor" href="#使用指南"><span>使用指南</span></a></h3>
<p>我们提供了详细的文档来帮助你快速上手：</p>
<ul>
<li><strong><RouteLink to="/installation.html">安装指南</RouteLink></strong> - 详细的安装步骤和环境要求</li>
<li><strong><RouteLink to="/cli.html">命令行工具</RouteLink></strong> - CLI 工具的完整使用说明</li>
<li><strong><RouteLink to="/api.html">编程接口</RouteLink></strong> - Node.js 编程接口文档</li>
<li><strong><RouteLink to="/typescript.html">TypeScript 类型工具</RouteLink></strong> - 类型安全的 API 调用方法</li>
<li><strong><RouteLink to="/configuration.html">配置参考</RouteLink></strong> - 完整的配置选项说明</li>
<li><strong><RouteLink to="/troubleshooting.html">故障排除</RouteLink></strong> - 常见问题和解决方案</li>
</ul>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<p>支持多种配置方式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'YOUR_PROJECT_ID'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 模块化导出</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'USER_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多配置选项请查看 <RouteLink to="/configuration.html">配置参考</RouteLink>。</p>
<h3 id="贡献" tabindex="-1"><a class="header-anchor" href="#贡献"><span>贡献</span></a></h3>
<p>我们欢迎所有形式的贡献！如果你有任何想法、建议或发现了 bug，请：</p>
<ol>
<li>查看 <a href="https://github.com/shixinde/apifox-swagger/issues" target="_blank" rel="noopener noreferrer">Issues</a> 是否已有相关问题</li>
<li>创建新的 Issue 描述问题或建议</li>
<li>提交 Pull Request</li>
</ol>
<p>在提交代码前，请确保：</p>
<ul>
<li>代码通过所有测试</li>
<li>遵循项目的代码规范</li>
<li>添加必要的文档和测试</li>
</ul>
<h3 id="相关项目" tabindex="-1"><a class="header-anchor" href="#相关项目"><span>相关项目</span></a></h3>
<ul>
<li><a href="https://shixindea.github.io/element-promax-docs/en-US/" target="_blank" rel="noopener noreferrer">Vue3 组件库 Element ProMax</a></li>
<li><a href="https://www.npmjs.com/package/@shixinde/guoguo-cz" target="_blank" rel="noopener noreferrer">Git 提交规范 Guoguo-cz</a></li>
<li><a href="https://shixindea.github.io/shixinde-utils/" target="_blank" rel="noopener noreferrer">JavaScript 工具类 Guoguo-utils</a></li>
<li><a href="https://www.npmjs.com/package/@shixinde/vuepress-theme-init" target="_blank" rel="noopener noreferrer">vuepress 快速模板 Guoguo-vuepress</a></li>
<li><a href="https://www.npmjs.com/package/@shixinde/vuepress-theme-init" target="_blank" rel="noopener noreferrer">个人笔记 guoguo-notes</a></li>
<li><a href="https://www.npmjs.com/package/@shixinde/apifox-swagger" target="_blank" rel="noopener noreferrer">api 文档生成工具 apifox-swagger</a></li>
</ul>
<h3 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证"><span>许可证</span></a></h3>
<p>该项目基于 MIT 许可证开源，详情请参阅 <a href="https://github.com/shixinde/apifox-swagger/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</a>。</p>
<h3 id="作者" tabindex="-1"><a class="header-anchor" href="#作者"><span>作者</span></a></h3>
<p>袁果锅 (@shixinde)</p>
<ul>
<li>GitHub: <a href="https://github.com/shixinde" target="_blank" rel="noopener noreferrer">@shixinde</a></li>
<li>Email: 2914310412@qq.com</li>
</ul>
<hr>
<p>如果这个项目对你有帮助，请给我们一个 ⭐️！</p>
</div></template>


