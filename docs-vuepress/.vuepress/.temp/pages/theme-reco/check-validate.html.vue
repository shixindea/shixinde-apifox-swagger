<template><div><h3 id="手机号校验" tabindex="-1"><a class="header-anchor" href="#手机号校验"><span>手机号校验</span></a></h3>
<blockquote>
<p>export declare const mobileCheck: (value: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>mobileCheck</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mobileCheck <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">'15512666996'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">'369'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型判断字符是不是纯数值" tabindex="-1"><a class="header-anchor" href="#类型判断字符是不是纯数值"><span>类型判断字符是不是纯数值</span></a></h3>
<blockquote>
<p>export declare function isNumber(value: string): boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>isNumber</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> isNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">'a123'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断字符是不是-空对象" tabindex="-1"><a class="header-anchor" href="#判断字符是不是-空对象"><span>判断字符是不是 空对象</span></a></h3>
<blockquote>
<p>export declare function isNullObject(value: Object): boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>isNullObject</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>Object</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> isNullObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">isNullObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">isNullObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="身份证校验" tabindex="-1"><a class="header-anchor" href="#身份证校验"><span>身份证校验</span></a></h3>
<blockquote>
<p>export declare const idCardCheck: (value: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>idCardCheck</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> idCardCheck <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">idCardCheck</span><span class="token punctuation">(</span><span class="token string">'正确身份证号'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">idCardCheck</span><span class="token punctuation">(</span><span class="token string">'369'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="邮箱校验" tabindex="-1"><a class="header-anchor" href="#邮箱校验"><span>邮箱校验</span></a></h3>
<blockquote>
<p>export declare const emailCheck: (value: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>emailCheck</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> emailCheck <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">emailCheck</span><span class="token punctuation">(</span><span class="token string">'26666662@qq.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">emailCheck</span><span class="token punctuation">(</span><span class="token string">'1315'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是浏览器内核" tabindex="-1"><a class="header-anchor" href="#判断是浏览器内核"><span>判断是浏览器内核*</span></a></h3>
<blockquote>
<p>export declare const checkBrowser: () =&gt; string;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkBrowser</code></p>
<p><strong>值</strong></p>
<p><code v-pre>IE</code> <code v-pre>opera</code> <code v-pre>苹果</code> <code v-pre>谷歌</code> <code v-pre>火狐</code></p>
<p><strong>参数</strong></p>
<p>无</p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkBrowser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkBrowser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//返回字符型 IE opera 苹果 谷歌 火狐</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是大写字母" tabindex="-1"><a class="header-anchor" href="#判断是否是大写字母"><span>判断是否是大写字母</span></a></h3>
<blockquote>
<p>export declare const checkCapitalLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkCapitalLetter</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkCapitalLetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'AA11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'aa11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'aa'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'AA'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'AAbb'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkCapitalLetter</span><span class="token punctuation">(</span><span class="token string">'AAbb11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断全部是小写字母" tabindex="-1"><a class="header-anchor" href="#判断全部是小写字母"><span>判断全部是小写字母</span></a></h3>
<blockquote>
<p>export declare const checkLowercaseLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkLowercaseLetter</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkLowercaseLetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'AA11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'aa11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'aa'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'AA'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'AAbb'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLowercaseLetter</span><span class="token punctuation">(</span><span class="token string">'AAbb11'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是中文" tabindex="-1"><a class="header-anchor" href="#判断是否是中文"><span>判断是否是中文</span></a></h3>
<blockquote>
<p>export declare const checkChinese: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkChinese</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkChinese <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkChinese</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkChinese</span><span class="token punctuation">(</span><span class="token string">'袁果锅'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkChinese</span><span class="token punctuation">(</span><span class="token string">'袁Guoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是中文-数字或字母" tabindex="-1"><a class="header-anchor" href="#判断是否是中文-数字或字母"><span>判断是否是中文，数字或字母</span></a></h3>
<blockquote>
<p>export declare const checkChineseNumberLettter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkChineseNumberLettter</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkChineseNumberLettter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkChineseNumberLettter</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkChineseNumberLettter</span><span class="token punctuation">(</span><span class="token string">'袁果锅'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkChineseNumberLettter</span><span class="token punctuation">(</span><span class="token string">'袁Guoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkChineseNumberLettter</span><span class="token punctuation">(</span><span class="token string">'10086@qq.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是终端类型-值有-ios-android-ipad" tabindex="-1"><a class="header-anchor" href="#判断是终端类型-值有-ios-android-ipad"><span>判断是终端类型,值有 ios,android,iPad</span></a></h3>
<blockquote>
<p>export declare const checkIosAndroidIpad: () =&gt; string;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkIosAndroidIpad</code></p>
<p><strong>值</strong></p>
<p>ios android iPad</p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkIosAndroidIpad <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkIosAndroidIpad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//返回字符型 ios | android | iPad</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是字母" tabindex="-1"><a class="header-anchor" href="#判断是否是字母"><span>判断是否是字母</span></a></h3>
<blockquote>
<p>export declare const checkLetter: (data: any) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkLetter</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>data</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkLetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token string">'袁果锅'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token string">'袁Guoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token string">'YuanGuoGuo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token string">'10086@qq.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"袁果锅"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkLetter</span><span class="token punctuation">(</span><span class="token number">10086</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是数字" tabindex="-1"><a class="header-anchor" href="#判断是否是数字"><span>判断是否是数字</span></a></h3>
<blockquote>
<p>export declare const checkNum: (data: any) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkNum</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>data</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkNum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token string">'袁果锅'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token string">'袁Guoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token string">'YuanGuoGuo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token string">'10086@qq.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token number">10086</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是字母或数字" tabindex="-1"><a class="header-anchor" href="#判断是否是字母或数字"><span>判断是否是字母或数字</span></a></h3>
<blockquote>
<p>export declare const checkNumOrLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkNumOrLetter</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkNumOrLetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token string">'10086'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token string">'袁果锅'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token string">'袁Guoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token string">'YuanGuoGuo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token string">'10086@qq.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"><span class="token function">checkNumOrLetter</span><span class="token punctuation">(</span><span class="token number">10086</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是正确的网址" tabindex="-1"><a class="header-anchor" href="#判断是否是正确的网址"><span>判断是否是正确的网址</span></a></h3>
<blockquote>
<p>export declare const checkUrl: (url: string) =&gt; boolean;</p>
</blockquote>
<p><strong>方法名</strong></p>
<p><code v-pre>checkUrl</code></p>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> checkUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@shixinde/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkUrl</span><span class="token punctuation">(</span><span class="token string">'www.baidu.com'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">checkUrl</span><span class="token punctuation">(</span><span class="token string">'yuanguoguo'</span><span class="token punctuation">)</span> <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


