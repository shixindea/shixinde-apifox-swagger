<template><div><h1 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考"><span>配置参考</span></a></h1>
<p>@shixinde/apifox-swagger 支持多种配置方式，让你可以灵活地定制导出行为。</p>
<h2 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式"><span>配置方式</span></a></h2>
<h3 id="_1-环境变量" tabindex="-1"><a class="header-anchor" href="#_1-环境变量"><span>1. 环境变量</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># .env 文件</span></span>
<span class="line"><span class="token assign-left variable">APIFOX_ACCESS_TOKEN</span><span class="token operator">=</span>your-access-token</span>
<span class="line"><span class="token assign-left variable">APIFOX_PROJECT_ID</span><span class="token operator">=</span><span class="token number">266643</span></span>
<span class="line"><span class="token assign-left variable">APIFOX_BASE_URL</span><span class="token operator">=</span>https://api.apifox.cn</span>
<span class="line"><span class="token assign-left variable">OUTPUT_DIR</span><span class="token operator">=</span>./src/types</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件"><span>2. 配置文件</span></a></h3>
<h4 id="apifox-config-js-推荐" tabindex="-1"><a class="header-anchor" href="#apifox-config-js-推荐"><span>apifox.config.js（推荐）</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 基本配置</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 导出选项</span></span>
<span class="line">  <span class="token literal-property property">useLocal</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">folderName</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 高级配置</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 多模块配置</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/order'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="apifox-config-json" tabindex="-1"><a class="header-anchor" href="#apifox-config-json"><span>apifox.config.json</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"projectId"</span><span class="token operator">:</span> <span class="token string">"266643"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"outdir"</span><span class="token operator">:</span> <span class="token string">"./src/types"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"useLocal"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"modules"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户模块"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"folderId"</span><span class="token operator">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outdir"</span><span class="token operator">:</span> <span class="token string">"./src/types/user"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-package-json-配置" tabindex="-1"><a class="header-anchor" href="#_3-package-json-配置"><span>3. package.json 配置</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"apifox"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"projectId"</span><span class="token operator">:</span> <span class="token string">"266643"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"outdir"</span><span class="token operator">:</span> <span class="token string">"./src/types"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"modules"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户模块"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"folderId"</span><span class="token operator">:</span> <span class="token string">"123456"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置选项详解" tabindex="-1"><a class="header-anchor" href="#配置选项详解"><span>配置选项详解</span></a></h2>
<h3 id="基本选项" tabindex="-1"><a class="header-anchor" href="#基本选项"><span>基本选项</span></a></h3>
<h4 id="projectid" tabindex="-1"><a class="header-anchor" href="#projectid"><span>projectId</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string</code></li>
<li><strong>必需</strong>: 是（云端模式）</li>
<li><strong>描述</strong>: Apifox 项目 ID</li>
<li><strong>示例</strong>: <code v-pre>&quot;266643&quot;</code></li>
</ul>
<h4 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span>token</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string</code></li>
<li><strong>必需</strong>: 是（云端模式）</li>
<li><strong>描述</strong>: Apifox 访问令牌</li>
<li><strong>示例</strong>: <code v-pre>&quot;your-access-token&quot;</code></li>
<li><strong>注意</strong>: 可以通过环境变量 <code v-pre>APIFOX_ACCESS_TOKEN</code> 设置</li>
</ul>
<h4 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir"><span>outdir</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string</code></li>
<li><strong>默认值</strong>: <code v-pre>&quot;./apifox&quot;</code></li>
<li><strong>描述</strong>: 输出目录路径</li>
<li><strong>示例</strong>: <code v-pre>&quot;./src/types&quot;</code></li>
</ul>
<h3 id="导出选项" tabindex="-1"><a class="header-anchor" href="#导出选项"><span>导出选项</span></a></h3>
<h4 id="uselocal" tabindex="-1"><a class="header-anchor" href="#uselocal"><span>useLocal</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否从本地 Apifox 客户端导出</li>
<li><strong>示例</strong>: <code v-pre>true</code></li>
</ul>
<h4 id="folderid" tabindex="-1"><a class="header-anchor" href="#folderid"><span>folderId</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string | null</code></li>
<li><strong>默认值</strong>: <code v-pre>null</code></li>
<li><strong>描述</strong>: 指定要导出的文件夹 ID</li>
<li><strong>示例</strong>: <code v-pre>&quot;123456&quot;</code></li>
</ul>
<h4 id="foldername" tabindex="-1"><a class="header-anchor" href="#foldername"><span>folderName</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string | null</code></li>
<li><strong>默认值</strong>: <code v-pre>null</code></li>
<li><strong>描述</strong>: 指定要导出的文件夹名称</li>
<li><strong>示例</strong>: <code v-pre>&quot;用户模块&quot;</code></li>
</ul>
<h3 id="网络选项" tabindex="-1"><a class="header-anchor" href="#网络选项"><span>网络选项</span></a></h3>
<h4 id="baseurl" tabindex="-1"><a class="header-anchor" href="#baseurl"><span>baseUrl</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string</code></li>
<li><strong>默认值</strong>: <code v-pre>&quot;https://api.apifox.cn&quot;</code></li>
<li><strong>描述</strong>: Apifox API 基础 URL</li>
<li><strong>示例</strong>: <code v-pre>&quot;https://api.apifox.cn&quot;</code></li>
</ul>
<h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout"><span>timeout</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>number</code></li>
<li><strong>默认值</strong>: <code v-pre>30000</code></li>
<li><strong>描述</strong>: 请求超时时间（毫秒）</li>
<li><strong>示例</strong>: <code v-pre>60000</code></li>
</ul>
<h4 id="retries" tabindex="-1"><a class="header-anchor" href="#retries"><span>retries</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>number</code></li>
<li><strong>默认值</strong>: <code v-pre>3</code></li>
<li><strong>描述</strong>: 失败重试次数</li>
<li><strong>示例</strong>: <code v-pre>5</code></li>
</ul>
<h3 id="输出选项" tabindex="-1"><a class="header-anchor" href="#输出选项"><span>输出选项</span></a></h3>
<h4 id="filename" tabindex="-1"><a class="header-anchor" href="#filename"><span>filename</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>string</code></li>
<li><strong>默认值</strong>: <code v-pre>&quot;all&quot;</code></li>
<li><strong>描述</strong>: 输出文件名（不包含扩展名）</li>
<li><strong>示例</strong>: <code v-pre>&quot;api&quot;</code></li>
</ul>
<h4 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>&quot;json&quot; | &quot;typescript&quot; | &quot;both&quot;</code></li>
<li><strong>默认值</strong>: <code v-pre>&quot;both&quot;</code></li>
<li><strong>描述</strong>: 输出格式</li>
<li><strong>示例</strong>: <code v-pre>&quot;typescript&quot;</code></li>
</ul>
<h3 id="多模块配置" tabindex="-1"><a class="header-anchor" href="#多模块配置"><span>多模块配置</span></a></h3>
<h4 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>modules</span></a></h4>
<ul>
<li><strong>类型</strong>: <code v-pre>ModuleConfig[]</code></li>
<li><strong>默认值</strong>: <code v-pre>[]</code></li>
<li><strong>描述</strong>: 多模块配置数组</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ModuleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>           <span class="token comment">// 模块名称</span></span>
<span class="line">  folderId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>      <span class="token comment">// 文件夹 ID</span></span>
<span class="line">  folderName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>    <span class="token comment">// 文件夹名称</span></span>
<span class="line">  outdir<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>        <span class="token comment">// 输出目录（可选，默认使用主配置）</span></span>
<span class="line">  filename<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>      <span class="token comment">// 文件名（可选，默认使用模块名）</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h2>
<h3 id="_1-简单项目配置" tabindex="-1"><a class="header-anchor" href="#_1-简单项目配置"><span>1. 简单项目配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/api/types'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-多模块项目配置" tabindex="-1"><a class="header-anchor" href="#_2-多模块项目配置"><span>2. 多模块项目配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'user-api'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/order'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'order-api'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'产品模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123458'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/product'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'product-api'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'支付模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderName</span><span class="token operator">:</span> <span class="token string">'支付相关接口'</span><span class="token punctuation">,</span> <span class="token comment">// 也可以使用文件夹名称</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/payment'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-开发环境配置" tabindex="-1"><a class="header-anchor" href="#_3-开发环境配置"><span>3. 开发环境配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.dev.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 开发环境特定配置</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 只导出特定模块进行快速开发</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-生产环境配置" tabindex="-1"><a class="header-anchor" href="#_4-生产环境配置"><span>4. 生产环境配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.prod.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./dist/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 生产环境配置</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 导出所有模块</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'产品模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123458'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'支付模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123459'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'通知模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123460'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-本地开发配置" tabindex="-1"><a class="header-anchor" href="#_5-本地开发配置"><span>5. 本地开发配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.local.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">useLocal</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/local'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 本地模式不需要 projectId 和 token</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件优先级" tabindex="-1"><a class="header-anchor" href="#配置文件优先级"><span>配置文件优先级</span></a></h2>
<p>配置文件的加载优先级（从高到低）：</p>
<ol>
<li>命令行参数</li>
<li><code v-pre>apifox.config.js</code></li>
<li><code v-pre>apifox.config.json</code></li>
<li><code v-pre>package.json</code> 中的 <code v-pre>apifox</code> 字段</li>
<li>环境变量</li>
<li>默认值</li>
</ol>
<h2 id="环境变量参考" tabindex="-1"><a class="header-anchor" href="#环境变量参考"><span>环境变量参考</span></a></h2>
<table>
<thead>
<tr>
<th>环境变量</th>
<th>对应配置</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>APIFOX_ACCESS_TOKEN</code></td>
<td><code v-pre>token</code></td>
<td>访问令牌</td>
</tr>
<tr>
<td><code v-pre>APIFOX_PROJECT_ID</code></td>
<td><code v-pre>projectId</code></td>
<td>项目 ID</td>
</tr>
<tr>
<td><code v-pre>APIFOX_BASE_URL</code></td>
<td><code v-pre>baseUrl</code></td>
<td>API 基础 URL</td>
</tr>
<tr>
<td><code v-pre>OUTPUT_DIR</code></td>
<td><code v-pre>outdir</code></td>
<td>输出目录</td>
</tr>
<tr>
<td><code v-pre>USE_LOCAL</code></td>
<td><code v-pre>useLocal</code></td>
<td>是否使用本地模式</td>
</tr>
<tr>
<td><code v-pre>TIMEOUT</code></td>
<td><code v-pre>timeout</code></td>
<td>请求超时时间</td>
</tr>
<tr>
<td><code v-pre>RETRIES</code></td>
<td><code v-pre>retries</code></td>
<td>重试次数</td>
</tr>
</tbody>
</table>
<h2 id="动态配置" tabindex="-1"><a class="header-anchor" href="#动态配置"><span>动态配置</span></a></h2>
<h3 id="_1-基于环境的配置" tabindex="-1"><a class="header-anchor" href="#_1-基于环境的配置"><span>1. 基于环境的配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> isDev <span class="token operator">?</span> <span class="token string">'./src/types'</span> <span class="token operator">:</span> <span class="token string">'./dist/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 开发环境只导出核心模块</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> isDev <span class="token operator">?</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'产品模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123458'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> isDev <span class="token operator">?</span> <span class="token number">10000</span> <span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> isDev <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-基于分支的配置" tabindex="-1"><a class="header-anchor" href="#_2-基于分支的配置"><span>2. 基于分支的配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> execSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'child_process'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentBranch <span class="token operator">=</span> <span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'git branch --show-current'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">'utf8'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> branchConfigs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'main'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span> <span class="token comment">// 生产项目</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'develop'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'2364644'</span><span class="token punctuation">,</span> <span class="token comment">// 开发项目</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123460'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'feature/*'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'2364645'</span><span class="token punctuation">,</span> <span class="token comment">// 功能分支项目</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'新功能模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123470'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getBranchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>branchConfigs<span class="token punctuation">[</span>currentBranch<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> branchConfigs<span class="token punctuation">[</span>currentBranch<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查通配符匹配</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>pattern<span class="token punctuation">,</span> config<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>branchConfigs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>pattern<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> currentBranch<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>pattern<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 默认配置</span></span>
<span class="line">  <span class="token keyword">return</span> branchConfigs<span class="token punctuation">[</span><span class="token string">'develop'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span><span class="token function">getBranchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-基于用户的配置" tabindex="-1"><a class="header-anchor" href="#_3-基于用户的配置"><span>3. 基于用户的配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">import</span> os <span class="token keyword">from</span> <span class="token string">'os'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> username <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">userInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>username<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> userConfigs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'developer1'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123457'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'developer2'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'产品模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123458'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'支付模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123459'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'266643'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 根据用户加载不同的模块</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> userConfigs<span class="token punctuation">[</span>username<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span> <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'123456'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置验证" tabindex="-1"><a class="header-anchor" href="#配置验证"><span>配置验证</span></a></h2>
<h3 id="_1-基本验证" tabindex="-1"><a class="header-anchor" href="#_1-基本验证"><span>1. 基本验证</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// scripts/validate-config.js</span></span>
<span class="line"><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">'../apifox.config.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">validateConfig</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查必需字段</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>projectId <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>useLocal<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'projectId 是必需的（除非使用本地模式）'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>token <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>useLocal <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'token 是必需的（除非使用本地模式）'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>outdir<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'outdir 是必需的'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查模块配置</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>modules<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    config<span class="token punctuation">.</span>modules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">模块 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 缺少 name 字段</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">.</span>folderId <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>module<span class="token punctuation">.</span>folderName<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">模块 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 需要 folderId 或 folderName</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> errors<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token function">validateConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'配置验证失败:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  errors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">  - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'配置验证通过'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-运行时验证" tabindex="-1"><a class="header-anchor" href="#_2-运行时验证"><span>2. 运行时验证</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// src/utils/config-validator.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">validateRuntimeConfig</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> warnings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查输出目录是否存在</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>outdir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    warnings<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">输出目录 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>outdir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 不存在，将自动创建</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查超时时间</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>timeout <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    warnings<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'超时时间过短，可能导致请求失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查重试次数</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>retries <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    warnings<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'重试次数过多，可能导致长时间等待'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> warnings<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置模板" tabindex="-1"><a class="header-anchor" href="#配置模板"><span>配置模板</span></a></h2>
<h3 id="_1-小型项目模板" tabindex="-1"><a class="header-anchor" href="#_1-小型项目模板"><span>1. 小型项目模板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'YOUR_PROJECT_ID'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-中型项目模板" tabindex="-1"><a class="header-anchor" href="#_2-中型项目模板"><span>2. 中型项目模板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'YOUR_PROJECT_ID'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'USER_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'业务模块'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'BUSINESS_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/business'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-大型项目模板" tabindex="-1"><a class="header-anchor" href="#_3-大型项目模板"><span>3. 大型项目模板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// apifox.config.js</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">'YOUR_PROJECT_ID'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">retries</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'用户管理'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'USER_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/user'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'订单管理'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'ORDER_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/order'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'产品管理'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'PRODUCT_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/product'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'支付系统'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'PAYMENT_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/payment'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'通知系统'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">folderId</span><span class="token operator">:</span> <span class="token string">'NOTIFICATION_FOLDER_ID'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outdir</span><span class="token operator">:</span> <span class="token string">'./src/types/notification'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 开发环境只导出核心模块</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDev<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'用户管理'</span><span class="token punctuation">,</span> <span class="token string">'订单管理'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li><RouteLink to="/troubleshooting.html">故障排除指南</RouteLink></li>
<li><RouteLink to="/typescript.html">TypeScript 类型工具</RouteLink></li>
<li><RouteLink to="/api.html">编程接口使用</RouteLink></li>
<li><RouteLink to="/cli.html">命令行工具使用</RouteLink></li>
</ul>
</div></template>


