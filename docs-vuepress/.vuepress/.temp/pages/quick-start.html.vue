<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1>
<p>本指南将帮助你快速上手 @shixinde/apifox-swagger，从 Apifox 导出 Swagger 文档并生成 TypeScript 类型定义。</p>
<h2 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备"><span>前置准备</span></a></h2>
<h3 id="_1-获取-apifox-访问令牌" tabindex="-1"><a class="header-anchor" href="#_1-获取-apifox-访问令牌"><span>1. 获取 Apifox 访问令牌</span></a></h3>
<ol>
<li>登录 <a href="https://www.apifox.cn/" target="_blank" rel="noopener noreferrer">Apifox 网页版</a></li>
<li>进入个人设置 → API 访问令牌</li>
<li>创建新的访问令牌</li>
<li>复制令牌并妥善保存</li>
</ol>
<h3 id="_2-获取项目-id" tabindex="-1"><a class="header-anchor" href="#_2-获取项目-id"><span>2. 获取项目 ID</span></a></h3>
<ol>
<li>在 Apifox 中打开你的项目</li>
<li>查看浏览器地址栏，URL 中包含项目 ID</li>
<li>例如：<code v-pre>https://www.apifox.cn/web/project/266643</code> 中的 <code v-pre>266643</code> 就是项目 ID</li>
</ol>
<h2 id="第一次使用" tabindex="-1"><a class="header-anchor" href="#第一次使用"><span>第一次使用</span></a></h2>
<h3 id="方式一-命令行工具-推荐新手" tabindex="-1"><a class="header-anchor" href="#方式一-命令行工具-推荐新手"><span>方式一：命令行工具（推荐新手）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 基本导出</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用环境变量设置令牌</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APIFOX_ACCESS_TOKEN</span><span class="token operator">=</span>your-access-token</span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或直接在命令中指定令牌</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--token</span> your-access-token <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二-编程接口" tabindex="-1"><a class="header-anchor" href="#方式二-编程接口"><span>方式二：编程接口</span></a></h3>
<p>创建一个简单的导出脚本：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// export-api.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> exportSwagger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/apifox-swagger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">exportSwagger</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'your-access-token'</span><span class="token punctuation">,</span> <span class="token comment">// 或使用环境变量</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./output'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'导出成功:'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'导出失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行脚本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">node</span> export-api.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="查看输出结果" tabindex="-1"><a class="header-anchor" href="#查看输出结果"><span>查看输出结果</span></a></h2>
<p>导出成功后，你会在输出目录下看到：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">output/</span>
<span class="line">└── swagger/</span>
<span class="line">    ├── all.json    # OpenAPI/Swagger JSON 文档</span>
<span class="line">    └── all.ts      # TypeScript 类型定义文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用生成的类型" tabindex="-1"><a class="header-anchor" href="#使用生成的类型"><span>使用生成的类型</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 导入生成的类型</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> paths <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./output/swagger/all'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeURL<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">MakeURL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/apifox-swagger/types'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 API 类型</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">UserLoginAPI</span> <span class="token operator">=</span> MakeURL<span class="token operator">&lt;</span>paths<span class="token punctuation">,</span> <span class="token string">'/api/user/login'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 提取请求和响应类型</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">LoginRequest</span> <span class="token operator">=</span> UserLoginAPI<span class="token punctuation">[</span><span class="token string">'jsonData'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">LoginResponse</span> <span class="token operator">=</span> UserLoginAPI<span class="token punctuation">[</span><span class="token string">'responseData'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建类型安全的 URL</span></span>
<span class="line"><span class="token keyword">const</span> loginUrl <span class="token operator">=</span> <span class="token generic-function"><span class="token function">makeURL</span><span class="token generic class-name"><span class="token operator">&lt;</span>paths<span class="token punctuation">,</span> <span class="token string">'/api/user/login'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'/api/user/login'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="_1-令牌认证失败" tabindex="-1"><a class="header-anchor" href="#_1-令牌认证失败"><span>1. 令牌认证失败</span></a></h3>
<p>确保你的访问令牌是有效的，并且有项目的访问权限。</p>
<h3 id="_2-项目-id-错误" tabindex="-1"><a class="header-anchor" href="#_2-项目-id-错误"><span>2. 项目 ID 错误</span></a></h3>
<p>检查项目 ID 是否正确，确保你有该项目的访问权限。</p>
<h3 id="_3-网络连接问题" tabindex="-1"><a class="header-anchor" href="#_3-网络连接问题"><span>3. 网络连接问题</span></a></h3>
<p>确保网络连接正常，没有代理或防火墙限制。</p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li><RouteLink to="/cli.html">命令行工具详细用法</RouteLink></li>
<li><RouteLink to="/api.html">编程接口完整指南</RouteLink></li>
<li><RouteLink to="/typescript.html">TypeScript 类型安全工具</RouteLink></li>
<li><RouteLink to="/configuration.html">配置文件使用</RouteLink></li>
<li><RouteLink to="/troubleshooting.html">故障排除指南</RouteLink></li>
</ul>
</div></template>


