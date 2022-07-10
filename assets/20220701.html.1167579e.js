import{_ as n,o as s,c as a,d as t}from"./app.1a7446ac.js";const p={},e=t(`<h2 id="ajax-\u524D\u594F" tabindex="-1"><a class="header-anchor" href="#ajax-\u524D\u594F" aria-hidden="true">#</a> ajax \u524D\u594F</h2><p>AJAX\uFF1AAsynchronous JavaScript And XML \u5F02\u6B65\u7684 javascript \u548C xml</p><p>AJAX \u662F\u7528 JavaScript \u811A\u672C\u53D1\u8D77 HTTP \u901A\u4FE1</p><p>JavaScript \u5F02\u6B65\u901A\u4FE1\uFF1A\u8BF7\u6C42\u670D\u52A1\u5668\u8FD4\u56DE xml/json \u6587\u6863\uFF0C\u524D\u7AEF\u4ECE xml \u6587\u6863\u4E2D\u63D0\u53D6\u6570\u636E\uFF0C\u518D\u5728\u4E0D\u5237\u65B0\u6574\u4E2A\u7F51\u9875\u7684\u57FA\u7840\u4E0A\uFF0C\u6E32\u67D3\u5230\u7F51\u9875\u76F8\u5E94\u7684\u4F4D\u7F6E</p><h2 id="\u521B\u5EFA-xmlhttprequest-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-xmlhttprequest-\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA XMLHTTPREQUEST \u5BF9\u8C61</h2><p>\u4F5C\u7528\uFF1Ajs \u811A\u672C http \u8BF7\u6C42\u7684\u53D1\u8D77\u5FC5\u987B\u901A\u8FC7 XMLHttpRequest \u5BF9\u8C61\uFF0C\u4E5F\u662F\u901A\u8FC7 AJAX \u8FDB\u884C\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u901A\u4FE1\u7684\u63A5\u53E3\uFF0C\u4E0D\u5C40\u9650\u4E8E XML\uFF0C\u53EF\u4EE5\u53D1\u9001\u4EFB\u4F55\u683C\u5F0F\u7684\u6570\u636E</p><p>XMLHttpRequest \u672C\u8EAB\u662F\u4E00\u4E2A js \u5F15\u64CE\u5185\u7F6E\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6240\u6709 XMLHttpRequest \u5BF9\u8C61\u90FD\u9700\u8981\u88AB\u5B9E\u4F8B\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ajax-\u53D1\u9001-http-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#ajax-\u53D1\u9001-http-\u8BF7\u6C42" aria-hidden="true">#</a> ajax \u53D1\u9001 http \u8BF7\u6C42</h2><ul><li>open \u65B9\u6CD5\uFF08\u53D1\u9001\u8BBE\u7F6E\uFF09\u53C2\u6570\u5217\u8868\uFF1A <ul><li>method\uFF1A\u8BF7\u6C42\u65B9\u5F0F</li><li>url\uFF1A\u8BF7\u6C42\u53D1\u9001\u7684\u5730\u5740</li><li>async\uFF1Atrue \u5F02\u6B65\uFF0Cfalse \u540C\u6B65</li></ul></li><li>send \u65B9\u6CD5\uFF08\u53D1\u9001\u8BF7\u6C42\uFF09,\u53C2\u6570\uFF1A <ul><li>\u53D1\u9001 post \u8BF7\u6C42\u4F53\u6570\u636E\u65F6\u4F7F\u7528\uFF0Cget \u8BF7\u6C42\u4E0D\u586B\u5199</li><li>post \u8BF7\u6C42\u65B9\u5F0F\u4E0B\uFF0Csend \u65B9\u6CD5\u53C2\u6570\u4E2D\u7684\u683C\u5F0F\uFF1A<code>&#39;a=1&amp;b=2&amp;c=3&#39;</code></li><li><code>xhr.setRequestHeader(&#39;Content-type&#39;, &#39;application/json&#39;)</code>\uFF0Cpost \u8BF7\u6C42\u65B9\u5F0F\u5FC5\u987B\u8BBE\u7F6E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u76EE\u7684\u662F\u5C06\u8BF7\u6C42\u4F53\u4E2D\u7684\u6570\u636E\u8F6C\u6362\u4E3A\u952E\u503C\u5BF9\uFF0C\u8FD9\u6837\u540E\u7AEF\u63A5\u6536\u5230<code>&#39;a=1&amp;b=2&amp;c=3&#39;</code>\u624D\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A post \u65B9\u5F0F\u4F20\u6765\u7684\u6570\u636E</li></ul></li></ul><h2 id="ajax-\u53D1\u9001\u8BF7\u6C42\u65F6\u7684\u54CD\u5E94\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#ajax-\u53D1\u9001\u8BF7\u6C42\u65F6\u7684\u54CD\u5E94\u4EFB\u52A1" aria-hidden="true">#</a> ajax \u53D1\u9001\u8BF7\u6C42\u65F6\u7684\u54CD\u5E94\u4EFB\u52A1</h2><p><code>onreadystatechange</code>\u4E8B\u4EF6\uFF1A\u6302\u8F7D\u5230 XMLHttpRequest \u5BF9\u8C61\u4E0A\u7684\u4E8B\u4EF6 <code>readyState</code>\u72B6\u6001\uFF1A\u901A\u8FC7 XMLHttpRequest \u5BF9\u8C61\u53D1\u9001 HTTP \u8BF7\u6C42\u7684\u5404\u9636\u6BB5\u72B6\u6001\u7801\uFF080-4\uFF09 <code>status</code>\u72B6\u6001\uFF1A\u670D\u52A1\u5668\u54CD\u5E94\u7684\u72B6\u6001\u7801</p><p>\u5F53<code>readyState</code>\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u89E6\u53D1<code>onreadystatechange</code>\u4E8B\u4EF6\u6267\u884C\u5176\u56DE\u8C03\u51FD\u6570</p><ul><li>0\uFF1A\u8BF7\u6C42\u672A\u521D\u59CB\u5316</li><li>1\uFF1A\u670D\u52A1\u5668\u8FDE\u63A5\u5DF2\u5EFA\u7ACB</li><li>2\uFF1A\u8BF7\u6C42\u5DF2\u63A5\u6536</li><li>3\uFF1A\u8BF7\u6C42\u5904\u7406\u4E2D</li><li>4\uFF1A\u8BF7\u6C42\u5DF2\u5B8C\u6210\uFF0C\u4E14\u54CD\u5E94\u5DF2\u5C31\u7EEA</li></ul><p><strong>\u6CE8\u610F</strong>\uFF1AreadyState \u4EC5\u4EC5\u662F\u9488\u5BF9\u8BF7\u6C42\u4E0E\u54CD\u5E94\u7684\u72B6\u6001\u7801\uFF0C\u83B7\u53D6\u8D44\u6E90\u662F\u5426\u6210\u529F\u53D6\u51B3\u4E8E status \u7684\u72B6\u6001</p><h2 id="ajax-\u670D\u52A1\u5668\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#ajax-\u670D\u52A1\u5668\u54CD\u5E94" aria-hidden="true">#</a> ajax \u670D\u52A1\u5668\u54CD\u5E94</h2><ul><li>responseText\uFF1A\u83B7\u53D6\u5B57\u7B26\u4E32\u6570\u636E</li><li>responseXML\uFF1A\u83B7\u53D6 XML \u6570\u636E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 0</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://localhost:5001/page/home&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 1</span>

xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 2 3 4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 0</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://localhost:5001/register&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 1</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token comment">// 2 3 4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">201</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;name=cherry3&amp;password=12345&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajax-\u7B80\u6613\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#ajax-\u7B80\u6613\u5C01\u88C5" aria-hidden="true">#</a> ajax \u7B80\u6613\u5C01\u88C5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">_doAjax</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>method<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>url<span class="token punctuation">,</span> opt<span class="token punctuation">.</span>async<span class="token punctuation">)</span>

    opt<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;POST&#39;</span> <span class="token operator">&amp;&amp;</span>
      xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span>

    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        opt<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        opt<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    opt<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;POST&#39;</span> <span class="token operator">?</span> xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token function">formatStr</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">formatStr</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        str <span class="token operator">+=</span> key <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;&amp;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      opt<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token punctuation">(</span>opt<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      opt<span class="token punctuation">.</span>async <span class="token operator">=</span> opt<span class="token punctuation">.</span>async <span class="token operator">||</span> <span class="token boolean">true</span>
      opt<span class="token punctuation">.</span>success <span class="token operator">=</span> opt<span class="token punctuation">.</span>success <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      opt<span class="token punctuation">.</span>fail <span class="token operator">=</span> opt<span class="token punctuation">.</span>fail <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

      <span class="token function">_doAjax</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5001/page/home&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","20220701.html.vue"]]);export{r as default};