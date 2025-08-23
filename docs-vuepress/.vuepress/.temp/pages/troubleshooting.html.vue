<template><div><h1 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h1>
<p>本文档帮助你解决使用 @shixinde/apifox-swagger 时可能遇到的常见问题。</p>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<h3 id="_1-认证相关错误" tabindex="-1"><a class="header-anchor" href="#_1-认证相关错误"><span>1. 认证相关错误</span></a></h3>
<h4 id="错误-401-unauthorized" tabindex="-1"><a class="header-anchor" href="#错误-401-unauthorized"><span>错误：<code v-pre>401 Unauthorized</code></span></a></h4>
<p><strong>原因</strong>：访问令牌无效或已过期</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 检查令牌是否正确设置</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$APIFOX_ACCESS_TOKEN</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新获取令牌</span></span>
<span class="line"><span class="token comment"># 1. 登录 Apifox 网页版</span></span>
<span class="line"><span class="token comment"># 2. 进入个人设置 > 访问令牌</span></span>
<span class="line"><span class="token comment"># 3. 生成新的令牌</span></span>
<span class="line"><span class="token comment"># 4. 更新环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APIFOX_ACCESS_TOKEN</span><span class="token operator">=</span><span class="token string">"your-new-token"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误-403-forbidden" tabindex="-1"><a class="header-anchor" href="#错误-403-forbidden"><span>错误：<code v-pre>403 Forbidden</code></span></a></h4>
<p><strong>原因</strong>：令牌权限不足或项目访问受限</p>
<p><strong>解决方案</strong>：</p>
<ol>
<li>确认你有项目的访问权限</li>
<li>检查令牌是否有足够的权限</li>
<li>联系项目管理员添加权限</li>
</ol>
<h3 id="_2-网络相关错误" tabindex="-1"><a class="header-anchor" href="#_2-网络相关错误"><span>2. 网络相关错误</span></a></h3>
<h4 id="错误-econnrefused-或-etimedout" tabindex="-1"><a class="header-anchor" href="#错误-econnrefused-或-etimedout"><span>错误：<code v-pre>ECONNREFUSED</code> 或 <code v-pre>ETIMEDOUT</code></span></a></h4>
<p><strong>原因</strong>：网络连接问题或防火墙阻止</p>
<p><strong>解决方案</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js - 增加超时时间和重试次数</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'your-project-id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 网络配置</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span>  <span class="token comment">// 增加到 60 秒</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>      <span class="token comment">// 增加重试次数</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 如果在企业网络环境中，可能需要配置代理</span></span>
<span class="line">  <span class="token literal-property property">proxy</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HTTP_PROXY</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误-ssl-certificate-problem" tabindex="-1"><a class="header-anchor" href="#错误-ssl-certificate-problem"><span>错误：<code v-pre>SSL certificate problem</code></span></a></h4>
<p><strong>原因</strong>：SSL 证书验证失败</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 临时禁用 SSL 验证（不推荐用于生产环境）</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_TLS_REJECT_UNAUTHORIZED</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者更新 Node.js 和 npm 到最新版本</span></span>
<span class="line"><span class="token function">npm</span> update <span class="token parameter variable">-g</span> <span class="token function">npm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-文件系统错误" tabindex="-1"><a class="header-anchor" href="#_3-文件系统错误"><span>3. 文件系统错误</span></a></h3>
<h4 id="错误-enoent-no-such-file-or-directory" tabindex="-1"><a class="header-anchor" href="#错误-enoent-no-such-file-or-directory"><span>错误：<code v-pre>ENOENT: no such file or directory</code></span></a></h4>
<p><strong>原因</strong>：输出目录不存在</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 手动创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./src/types</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者在配置中启用自动创建</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 在代码中自动创建目录</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mkdirSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> dirname <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> outdir <span class="token operator">=</span> <span class="token string">'./src/types'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token function">dirname</span><span class="token punctuation">(</span>outdir<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误-eacces-permission-denied" tabindex="-1"><a class="header-anchor" href="#错误-eacces-permission-denied"><span>错误：<code v-pre>EACCES: permission denied</code></span></a></h4>
<p><strong>原因</strong>：文件权限不足</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 检查文件权限</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-la</span> ./src/types</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改权限</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">755</span> ./src/types</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者使用 sudo（不推荐）</span></span>
<span class="line"><span class="token function">sudo</span> npx apifox-swagger <span class="token builtin class-name">export</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-typescript-相关错误" tabindex="-1"><a class="header-anchor" href="#_4-typescript-相关错误"><span>4. TypeScript 相关错误</span></a></h3>
<h4 id="错误-cannot-find-module-shixinde-apifox-swagger-types" tabindex="-1"><a class="header-anchor" href="#错误-cannot-find-module-shixinde-apifox-swagger-types"><span>错误：<code v-pre>Cannot find module '@shixinde/apifox-swagger/types'</code></span></a></h4>
<p><strong>原因</strong>：类型文件未生成或路径错误</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 1. 确保已导出类型文件</span></span>
<span class="line">npx apifox-swagger <span class="token builtin class-name">export</span> --project-id your-project-id</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 检查文件是否存在</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-la</span> ./src/types/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 检查 TypeScript 配置</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token comment">// tsconfig.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"@/types/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/types/*"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误-type-never-is-not-assignable-to-type" tabindex="-1"><a class="header-anchor" href="#错误-type-never-is-not-assignable-to-type"><span>错误：<code v-pre>Type 'never' is not assignable to type</code></span></a></h4>
<p><strong>原因</strong>：类型推断失败或路径参数不匹配</p>
<p><strong>解决方案</strong>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 错误的用法</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">BadURL</span> <span class="token operator">=</span> MakeURL<span class="token operator">&lt;</span><span class="token keyword">typeof</span> makeURL<span class="token operator">&lt;</span>UserPaths<span class="token punctuation">,</span> <span class="token string">'/user/{id}'</span><span class="token punctuation">,</span> <span class="token string">'GET'</span><span class="token operator">>></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 正确的用法</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">GoodURL</span> <span class="token operator">=</span> MakeURL<span class="token operator">&lt;</span>UserPaths<span class="token punctuation">,</span> <span class="token string">'/user/{id}'</span><span class="token punctuation">,</span> <span class="token string">'GET'</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查路径是否在类型定义中存在</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">UserPaths</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'/user/{id}'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">GET</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ... 接口定义</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-本地模式错误" tabindex="-1"><a class="header-anchor" href="#_5-本地模式错误"><span>5. 本地模式错误</span></a></h3>
<h4 id="错误-local-apifox-client-not-found" tabindex="-1"><a class="header-anchor" href="#错误-local-apifox-client-not-found"><span>错误：<code v-pre>Local Apifox client not found</code></span></a></h4>
<p><strong>原因</strong>：本地 Apifox 客户端未安装或未运行</p>
<p><strong>解决方案</strong>：</p>
<ol>
<li>下载并安装 Apifox 客户端</li>
<li>启动 Apifox 客户端</li>
<li>确保客户端版本支持 API 导出</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 检查本地服务是否运行</span></span>
<span class="line"><span class="token function">curl</span> http://localhost:4523/api/v1/projects</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果无响应，启动 Apifox 客户端</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误-project-not-found-in-local-client" tabindex="-1"><a class="header-anchor" href="#错误-project-not-found-in-local-client"><span>错误：<code v-pre>Project not found in local client</code></span></a></h4>
<p><strong>原因</strong>：项目未在本地客户端中打开</p>
<p><strong>解决方案</strong>：</p>
<ol>
<li>在 Apifox 客户端中打开对应项目</li>
<li>确保项目已同步到本地</li>
<li>检查项目 ID 是否正确</li>
</ol>
<h2 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧"><span>调试技巧</span></a></h2>
<h3 id="_1-启用详细日志" tabindex="-1"><a class="header-anchor" href="#_1-启用详细日志"><span>1. 启用详细日志</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 设置调试模式</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>apifox:*</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行命令</span></span>
<span class="line">npx apifox-swagger <span class="token builtin class-name">export</span> --project-id your-project-id</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 在代码中启用调试</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> exportSwagger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/apifox-swagger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">exportSwagger</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'your-project-id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// 启用调试模式</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-检查网络请求" tabindex="-1"><a class="header-anchor" href="#_2-检查网络请求"><span>2. 检查网络请求</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 添加请求拦截器</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">request</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'发送请求:'</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>method<span class="token operator">?.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> request<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到响应:'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span> response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'请求失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-验证配置" tabindex="-1"><a class="header-anchor" href="#_3-验证配置"><span>3. 验证配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// scripts/debug-config.js</span></span>
<span class="line"><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">'../apifox.config.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前配置:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查环境变量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\n环境变量:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'APIFOX_ACCESS_TOKEN:'</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span> <span class="token operator">?</span> <span class="token string">'已设置'</span> <span class="token operator">:</span> <span class="token string">'未设置'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'NODE_ENV:'</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查文件系统</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> existsSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\n文件系统:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'输出目录存在:'</span><span class="token punctuation">,</span> <span class="token function">existsSync</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>outdir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-测试连接" tabindex="-1"><a class="header-anchor" href="#_4-测试连接"><span>4. 测试连接</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// scripts/test-connection.js</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">testConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.apifox.cn/api/v1/projects'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'连接成功:'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'项目数量:'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token operator">?.</span>length <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'连接失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'响应状态:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'响应数据:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">testConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能问题" tabindex="-1"><a class="header-anchor" href="#性能问题"><span>性能问题</span></a></h2>
<h3 id="_1-导出速度慢" tabindex="-1"><a class="header-anchor" href="#_1-导出速度慢"><span>1. 导出速度慢</span></a></h3>
<p><strong>原因</strong>：项目过大或网络延迟</p>
<p><strong>解决方案</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用模块化导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'your-project-id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 只导出需要的模块</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'核心模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'core-folder-id'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 并行导出</span></span>
<span class="line">  <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">maxConcurrency</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-内存使用过高" tabindex="-1"><a class="header-anchor" href="#_2-内存使用过高"><span>2. 内存使用过高</span></a></h3>
<p><strong>原因</strong>：大型项目或并发过高</p>
<p><strong>解决方案</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 增加 Node.js 内存限制</span></span>
<span class="line"><span class="token function">node</span> --max-old-space-size<span class="token operator">=</span><span class="token number">4096</span> node_modules/.bin/apifox-swagger <span class="token builtin class-name">export</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 降低并发数</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ... 其他配置</span></span>
<span class="line">  <span class="token literal-property property">maxConcurrency</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">// 降低并发数</span></span>
<span class="line">  <span class="token literal-property property">batchSize</span><span class="token operator">:</span> <span class="token number">10</span>       <span class="token comment">// 减少批处理大小</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-文件过大" tabindex="-1"><a class="header-anchor" href="#_3-文件过大"><span>3. 文件过大</span></a></h3>
<p><strong>原因</strong>：生成的类型文件过大</p>
<p><strong>解决方案</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 分模块导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'your-project-id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'user-folder-id'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'order-folder-id'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/order'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境相关问题" tabindex="-1"><a class="header-anchor" href="#环境相关问题"><span>环境相关问题</span></a></h2>
<h3 id="_1-windows-环境" tabindex="-1"><a class="header-anchor" href="#_1-windows-环境"><span>1. Windows 环境</span></a></h3>
<h4 id="路径分隔符问题" tabindex="-1"><a class="header-anchor" href="#路径分隔符问题"><span>路径分隔符问题</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用 path.join 而不是硬编码路径</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'your-project-id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'types'</span><span class="token punctuation">)</span>  <span class="token comment">// 跨平台路径</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="powershell-执行策略" tabindex="-1"><a class="header-anchor" href="#powershell-执行策略"><span>PowerShell 执行策略</span></a></h4>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre class="language-powershell"><code><span class="line"><span class="token comment"># 如果遇到执行策略错误</span></span>
<span class="line"><span class="token function">Set-ExecutionPolicy</span> <span class="token operator">-</span>ExecutionPolicy RemoteSigned <span class="token operator">-</span>Scope CurrentUser</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或者使用 npx</span></span>
<span class="line">npx apifox-swagger export <span class="token operator">--</span>project-id your-project-id</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-docker-环境" tabindex="-1"><a class="header-anchor" href="#_2-docker-环境"><span>2. Docker 环境</span></a></h3>
<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker" data-title="docker"><pre v-pre class="language-docker"><code><span class="line"><span class="token comment"># Dockerfile</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm ci --only=production</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制源码</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . .</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出类型</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npx apifox-swagger export --project-id <span class="token variable">$PROJECT_ID</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构建应用</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm run build</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"npm"</span>, <span class="token string">"start"</span>]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token comment"># docker-compose.yml</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.8'</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">app</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">build</span><span class="token punctuation">:</span> .</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> APIFOX_ACCESS_TOKEN=$<span class="token punctuation">{</span>APIFOX_ACCESS_TOKEN<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">-</span> PROJECT_ID=$<span class="token punctuation">{</span>PROJECT_ID<span class="token punctuation">}</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./src/types<span class="token punctuation">:</span>/app/src/types</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ci-cd-环境" tabindex="-1"><a class="header-anchor" href="#_3-ci-cd-环境"><span>3. CI/CD 环境</span></a></h3>
<h4 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token comment"># .github/workflows/api-types.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Update API Types</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">schedule</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">'0 2 * * *'</span>  <span class="token comment"># 每天凌晨 2 点</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">update-types</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'18'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Export API types</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.APIFOX_ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npx apifox-swagger export --project-id ${{ vars.PROJECT_ID }}</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit changes</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          git config --local user.email "action@github.com"</span>
<span class="line">          git config --local user.name "GitHub Action"</span>
<span class="line">          git add src/types/</span>
<span class="line">          git diff --staged --quiet || git commit -m "chore: update API types"</span>
<span class="line">          git push</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci"><span>GitLab CI</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token comment"># .gitlab-ci.yml</span></span>
<span class="line"><span class="token key atrule">stages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> update<span class="token punctuation">-</span>types</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">update-api-types</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">stage</span><span class="token punctuation">:</span> update<span class="token punctuation">-</span>types</span>
<span class="line">  <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>18<span class="token punctuation">-</span>alpine</span>
<span class="line">  <span class="token key atrule">script</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> npm ci</span>
<span class="line">    <span class="token punctuation">-</span> npx apifox<span class="token punctuation">-</span>swagger export <span class="token punctuation">-</span><span class="token punctuation">-</span>project<span class="token punctuation">-</span>id $PROJECT_ID</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">      if [ -n "$(git status --porcelain src/types/)" ]; then</span>
<span class="line">        git config user.email "gitlab-ci@example.com"</span>
<span class="line">        git config user.name "GitLab CI"</span>
<span class="line">        git add src/types/</span>
<span class="line">        git commit -m "chore: update API types"</span>
<span class="line">        git push origin $CI_COMMIT_REF_NAME</span>
<span class="line">      fi</span></span>
<span class="line">  <span class="token key atrule">variables</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">:</span> $APIFOX_ACCESS_TOKEN</span>
<span class="line">  <span class="token key atrule">only</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> schedules</span>
<span class="line">    <span class="token punctuation">-</span> web</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本兼容性" tabindex="-1"><a class="header-anchor" href="#版本兼容性"><span>版本兼容性</span></a></h2>
<h3 id="node-js-版本" tabindex="-1"><a class="header-anchor" href="#node-js-版本"><span>Node.js 版本</span></a></h3>
<table>
<thead>
<tr>
<th>Node.js 版本</th>
<th>支持状态</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>18.x</td>
<td>✅ 推荐</td>
<td>完全支持</td>
</tr>
<tr>
<td>16.x</td>
<td>✅ 支持</td>
<td>需要 16.14+</td>
</tr>
<tr>
<td>14.x</td>
<td>⚠️ 有限支持</td>
<td>需要 14.18+</td>
</tr>
<tr>
<td>12.x</td>
<td>❌ 不支持</td>
<td>请升级 Node.js</td>
</tr>
</tbody>
</table>
<h3 id="typescript-版本" tabindex="-1"><a class="header-anchor" href="#typescript-版本"><span>TypeScript 版本</span></a></h3>
<table>
<thead>
<tr>
<th>TypeScript 版本</th>
<th>支持状态</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>5.x</td>
<td>✅ 推荐</td>
<td>完全支持</td>
</tr>
<tr>
<td>4.9+</td>
<td>✅ 支持</td>
<td>完全支持</td>
</tr>
<tr>
<td>4.5-4.8</td>
<td>⚠️ 有限支持</td>
<td>部分功能受限</td>
</tr>
<tr>
<td>&lt; 4.5</td>
<td>❌ 不支持</td>
<td>请升级 TypeScript</td>
</tr>
</tbody>
</table>
<h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助"><span>获取帮助</span></a></h2>
<h3 id="_1-检查文档" tabindex="-1"><a class="header-anchor" href="#_1-检查文档"><span>1. 检查文档</span></a></h3>
<ul>
<li><RouteLink to="/installation.html">安装指南</RouteLink></li>
<li><RouteLink to="/quick-start.html">快速开始</RouteLink></li>
<li><RouteLink to="/configuration.html">配置参考</RouteLink></li>
<li><RouteLink to="/typescript.html">TypeScript 类型工具</RouteLink></li>
</ul>
<h3 id="_2-社区支持" tabindex="-1"><a class="header-anchor" href="#_2-社区支持"><span>2. 社区支持</span></a></h3>
<ul>
<li>GitHub Issues: <a href="https://github.com/shixinde/apifox-swagger/issues" target="_blank" rel="noopener noreferrer">提交问题</a></li>
<li>讨论区: <a href="https://github.com/shixinde/apifox-swagger/discussions" target="_blank" rel="noopener noreferrer">参与讨论</a></li>
</ul>
<h3 id="_3-提交-bug-报告" tabindex="-1"><a class="header-anchor" href="#_3-提交-bug-报告"><span>3. 提交 Bug 报告</span></a></h3>
<p>提交 Bug 时请包含以下信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 收集系统信息</span></span>
<span class="line"><span class="token function">node</span> <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token function">npm</span> <span class="token parameter variable">--version</span></span>
<span class="line">npx apifox-swagger <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 收集错误信息</span></span>
<span class="line"><span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>apifox:* npx apifox-swagger <span class="token builtin class-name">export</span> --project-id your-project-id <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">tee</span> debug.log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Bug 报告模板</strong>：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token title important"><span class="token punctuation">##</span> 环境信息</span></span>
<span class="line"><span class="token list punctuation">-</span> Node.js 版本: </span>
<span class="line"><span class="token list punctuation">-</span> npm 版本: </span>
<span class="line"><span class="token list punctuation">-</span> @shixinde/apifox-swagger 版本: </span>
<span class="line"><span class="token list punctuation">-</span> 操作系统: </span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 问题描述</span></span>
<span class="line">[详细描述遇到的问题]</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 重现步骤</span></span>
<span class="line">1. </span>
<span class="line">2. </span>
<span class="line">3. </span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 期望行为</span></span>
<span class="line">[描述期望的正确行为]</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 实际行为</span></span>
<span class="line">[描述实际发生的行为]</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 错误日志</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[粘贴完整的错误日志]</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">## 配置文件</span>
<span class="line">```javascript</span>
<span class="line">[粘贴相关的配置文件内容]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他信息" tabindex="-1"><a class="header-anchor" href="#其他信息"><span>其他信息</span></a></h2>
<p>[任何其他可能有用的信息]</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">### 4. 常见问题快速检查清单</span>
<span class="line"></span>
<span class="line">在提交问题前，请检查以下项目：</span>
<span class="line"></span>
<span class="line">- [ ] Node.js 版本是否支持（>= 16.14）</span>
<span class="line">- [ ] 访问令牌是否正确设置</span>
<span class="line">- [ ] 项目 ID 是否正确</span>
<span class="line">- [ ] 网络连接是否正常</span>
<span class="line">- [ ] 输出目录是否有写入权限</span>
<span class="line">- [ ] 配置文件语法是否正确</span>
<span class="line">- [ ] 是否尝试了最新版本</span>
<span class="line">- [ ] 是否查看了相关文档</span>
<span class="line"></span>
<span class="line">## 下一步</span>
<span class="line"></span>
<span class="line">- [配置参考](./configuration.md)</span>
<span class="line">- [TypeScript 类型工具](./typescript.md)</span>
<span class="line">- [编程接口使用](./api.md)</span>
<span class="line">- [命令行工具使用](./cli.md)</span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


