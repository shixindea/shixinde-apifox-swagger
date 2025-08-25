<template><div><h1 id="命令行工具" tabindex="-1"><a class="header-anchor" href="#命令行工具"><span>命令行工具</span></a></h1>
<p><code v-pre>apifox-swagger</code> 提供了强大的命令行工具，支持多种导出模式和配置选项。</p>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">apifox-swagger <span class="token punctuation">[</span>选项<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="命令行选项" tabindex="-1"><a class="header-anchor" href="#命令行选项"><span>命令行选项</span></a></h2>
<h3 id="必需选项" tabindex="-1"><a class="header-anchor" href="#必需选项"><span>必需选项</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--projectId &lt;id&gt;</code></td>
<td>string</td>
<td>Apifox 项目 ID</td>
<td><code v-pre>--projectId 266643</code></td>
</tr>
<tr>
<td><code v-pre>--outdir &lt;path&gt;</code></td>
<td>string</td>
<td>输出目录路径</td>
<td><code v-pre>--outdir ./output</code></td>
</tr>
</tbody>
</table>
<h3 id="认证选项" tabindex="-1"><a class="header-anchor" href="#认证选项"><span>认证选项</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--token &lt;token&gt;</code></td>
<td>string</td>
<td>访问令牌（可选，优先级高于环境变量）</td>
<td><code v-pre>--token abc123</code></td>
</tr>
</tbody>
</table>
<h3 id="导出范围选项" tabindex="-1"><a class="header-anchor" href="#导出范围选项"><span>导出范围选项</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--folderId &lt;id&gt;</code></td>
<td>string</td>
<td>指定文件夹 ID</td>
<td><code v-pre>--folderId 123456</code></td>
</tr>
<tr>
<td><code v-pre>--folderName &lt;name&gt;</code></td>
<td>string</td>
<td>指定文件夹名称</td>
<td><code v-pre>--folderName &quot;用户模块&quot;</code></td>
</tr>
</tbody>
</table>
<h3 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项"><span>其他选项</span></a></h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--local</code></td>
<td>boolean</td>
<td>从本地 Apifox 客户端导出</td>
<td><code v-pre>--local</code></td>
</tr>
<tr>
<td><code v-pre>--help</code></td>
<td>boolean</td>
<td>显示帮助信息</td>
<td><code v-pre>--help</code></td>
</tr>
<tr>
<td><code v-pre>--version</code></td>
<td>boolean</td>
<td>显示版本信息</td>
<td><code v-pre>--version</code></td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="_1-基本导出" tabindex="-1"><a class="header-anchor" href="#_1-基本导出"><span>1. 基本导出</span></a></h3>
<p>导出整个项目的 API 文档：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-使用访问令牌" tabindex="-1"><a class="header-anchor" href="#_2-使用访问令牌"><span>2. 使用访问令牌</span></a></h3>
<p>直接在命令中指定访问令牌：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--token</span> your-access-token <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-导出指定文件夹" tabindex="-1"><a class="header-anchor" href="#_3-导出指定文件夹"><span>3. 导出指定文件夹</span></a></h3>
<p>只导出特定文件夹的 API：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 使用文件夹 ID</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderId</span> <span class="token number">123456</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用文件夹名称</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderName</span> <span class="token string">"用户模块"</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 同时指定文件夹 ID 和名称</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderId</span> <span class="token number">123456</span> <span class="token parameter variable">--folderName</span> <span class="token string">"用户模块"</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-环境变量配合使用" tabindex="-1"><a class="header-anchor" href="#_4-环境变量配合使用"><span>4. 环境变量配合使用</span></a></h3>
<p>设置环境变量后简化命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 设置环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APIFOX_ACCESS_TOKEN</span><span class="token operator">=</span>your-access-token</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">APIFOX_PROJECT_ID</span><span class="token operator">=</span><span class="token number">266643</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 简化的命令</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token variable">$APIFOX_PROJECT_ID</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-在-package-json-中使用" tabindex="-1"><a class="header-anchor" href="#_5-在-package-json-中使用"><span>5. 在 package.json 中使用</span></a></h3>
<p>将命令添加到 npm scripts：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"export-api"</span><span class="token operator">:</span> <span class="token string">"apifox-swagger --projectId 266643 --outdir ./src/types"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"export-user-api"</span><span class="token operator">:</span> <span class="token string">"apifox-swagger --projectId 266643 --folderName \"用户模块\" --outdir ./src/types/user"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"export-order-api"</span><span class="token operator">:</span> <span class="token string">"apifox-swagger --projectId 266643 --folderName \"订单模块\" --outdir ./src/types/order"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用 npm 运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> run export-api</span>
<span class="line"><span class="token function">npm</span> run export-user-api</span>
<span class="line"><span class="token function">npm</span> run export-order-api</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<h3 id="_1-批量导出多个模块" tabindex="-1"><a class="header-anchor" href="#_1-批量导出多个模块"><span>1. 批量导出多个模块</span></a></h3>
<p>创建批量导出脚本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># export-all.sh</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"开始导出 API 文档..."</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出用户模块</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderName</span> <span class="token string">"用户模块"</span> <span class="token parameter variable">--outdir</span> ./src/types/user</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"用户模块导出完成"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出订单模块</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderName</span> <span class="token string">"订单模块"</span> <span class="token parameter variable">--outdir</span> ./src/types/order</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"订单模块导出完成"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出产品模块</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--folderName</span> <span class="token string">"产品模块"</span> <span class="token parameter variable">--outdir</span> ./src/types/product</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"产品模块导出完成"</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"所有模块导出完成！"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行脚本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">chmod</span> +x export-all.sh</span>
<span class="line">./export-all.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-与-ci-cd-集成" tabindex="-1"><a class="header-anchor" href="#_2-与-ci-cd-集成"><span>2. 与 CI/CD 集成</span></a></h3>
<p>在 GitHub Actions 中使用：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token comment"># .github/workflows/export-api.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Export API Documentation</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">schedule</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">'0 2 * * *'</span>  <span class="token comment"># 每天凌晨 2 点运行</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>     <span class="token comment"># 手动触发</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">export</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'18'</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Export API documentation</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">APIFOX_ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.APIFOX_ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npx apifox-swagger --projectId 266643 --outdir ./src/types</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit changes</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          git config --local user.email "action@github.com"</span>
<span class="line">          git config --local user.name "GitHub Action"</span>
<span class="line">          git add .</span>
<span class="line">          git diff --staged --quiet || git commit -m "Update API documentation"</span>
<span class="line">          git push</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-监听文件变化自动导出" tabindex="-1"><a class="header-anchor" href="#_3-监听文件变化自动导出"><span>3. 监听文件变化自动导出</span></a></h3>
<p>使用 <code v-pre>nodemon</code> 监听配置文件变化：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 安装 nodemon</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nodemon</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 监听 apifox.config.js 变化</span></span>
<span class="line">nodemon <span class="token parameter variable">--watch</span> apifox.config.js <span class="token parameter variable">--exec</span> <span class="token string">"npm run export-api"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h2>
<h3 id="常见错误码" tabindex="-1"><a class="header-anchor" href="#常见错误码"><span>常见错误码</span></a></h3>
<table>
<thead>
<tr>
<th>错误码</th>
<th>描述</th>
<th>解决方案</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>401</code></td>
<td>认证失败</td>
<td>检查访问令牌是否正确</td>
</tr>
<tr>
<td><code v-pre>403</code></td>
<td>权限不足</td>
<td>确保有项目访问权限</td>
</tr>
<tr>
<td><code v-pre>404</code></td>
<td>项目或文件夹不存在</td>
<td>检查项目 ID 和文件夹 ID</td>
</tr>
<tr>
<td><code v-pre>500</code></td>
<td>服务器错误</td>
<td>稍后重试或联系支持</td>
</tr>
</tbody>
</table>
<h3 id="调试模式" tabindex="-1"><a class="header-anchor" href="#调试模式"><span>调试模式</span></a></h3>
<p>启用详细日志输出：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 设置调试环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>apifox-swagger:*</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行命令</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="_1-并行导出" tabindex="-1"><a class="header-anchor" href="#_1-并行导出"><span>1. 并行导出</span></a></h3>
<p>对于大型项目，可以并行导出不同模块：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 使用 GNU parallel（如果可用）</span></span>
<span class="line">parallel <span class="token parameter variable">-j</span> <span class="token number">4</span> ::: <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"apifox-swagger --projectId 266643 --folderName '用户模块' --outdir ./types/user"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"apifox-swagger --projectId 266643 --folderName '订单模块' --outdir ./types/order"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"apifox-swagger --projectId 266643 --folderName '产品模块' --outdir ./types/product"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token string">"apifox-swagger --projectId 266643 --folderName '支付模块' --outdir ./types/payment"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-缓存策略" tabindex="-1"><a class="header-anchor" href="#_2-缓存策略"><span>2. 缓存策略</span></a></h3>
<p>实现简单的缓存机制：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># export-with-cache.sh</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">CACHE_FILE</span><span class="token operator">=</span><span class="token string">".api-cache"</span></span>
<span class="line"><span class="token assign-left variable">CURRENT_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span></span>
<span class="line"><span class="token assign-left variable">CACHE_DURATION</span><span class="token operator">=</span><span class="token number">3600</span>  <span class="token comment"># 1小时</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">"<span class="token variable">$CACHE_FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">  <span class="token assign-left variable">CACHE_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token string">"<span class="token variable">$CACHE_FILE</span>"</span><span class="token variable">)</span></span></span>
<span class="line">  <span class="token assign-left variable">TIME_DIFF</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>CURRENT_TIME <span class="token operator">-</span> CACHE_TIME<span class="token variable">))</span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$TIME_DIFF</span> <span class="token parameter variable">-lt</span> <span class="token variable">$CACHE_DURATION</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">"使用缓存的 API 文档（<span class="token variable">${TIME_DIFF}</span>秒前更新）"</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"导出新的 API 文档..."</span></span>
<span class="line">apifox-swagger <span class="token parameter variable">--projectId</span> <span class="token number">266643</span> <span class="token parameter variable">--outdir</span> ./output</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">  <span class="token builtin class-name">echo</span> <span class="token variable">$CURRENT_TIME</span> <span class="token operator">></span> <span class="token string">"<span class="token variable">$CACHE_FILE</span>"</span></span>
<span class="line">  <span class="token builtin class-name">echo</span> <span class="token string">"API 文档导出完成并已缓存"</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li><RouteLink to="/api.html">编程接口使用</RouteLink></li>
<li><RouteLink to="/configuration.html">配置文件详解</RouteLink></li>
<li><RouteLink to="/typescript.html">TypeScript 类型工具</RouteLink></li>
<li><RouteLink to="/troubleshooting.html">故障排除指南</RouteLink></li>
</ul>
</div></template>


