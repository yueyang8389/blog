(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{295:function(t,n,a){"use strict";a.r(n);var e=a(3),r=Object(e.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/haizlin/fe-interview",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试每日 3+1（每日三问）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试每日一题"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react","aria-hidden":"true"}},[t._v("#")]),t._v(" react")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cf0733de51d4510803ce34e",target:"_blank",rel:"noopener noreferrer"}},[t._v("你要的 React 面试知识点，都在这了"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/blob/master/lib/React.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("React面试题"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/basic-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-router"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("react bind方法的实现原理\n参考："),a("a",{attrs:{href:"https://juejin.im/post/5bec4183f265da616b1044d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官问：能否模拟实现JS的bind方法"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("bind是Function原型链中的Function.prototype的一个属性")]),t._v(" "),a("li",[t._v("bind会返回一个跟原函数一样的函数")]),t._v(" "),a("li",[t._v("调用bind函数的this指向bind的第一个参数")])]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/blob/master/lib/Vue.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue面试题"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("双向绑定原理\n参考："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/47541415",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Vue 是通过数据劫持结合发布订阅模式来实现双向绑定的")]),t._v(" "),a("ul",[a("li",[t._v("Object.defineProperty：数据劫持，get 和 set")]),t._v(" "),a("li",[t._v("Observer 监听器：用来监听属性的变化通知订阅者")]),t._v(" "),a("li",[t._v("Watcher 订阅者：收到属性的变化，然后更新视图")]),t._v(" "),a("li",[t._v("Compile 解析器：解析指令，初始化模版，绑定订阅者")])]),t._v(" "),a("h2",{attrs:{id:"原生js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生js","aria-hidden":"true"}},[t._v("#")]),t._v(" 原生js")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 学习Javascript闭包（Closure）"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("什么是闭包"),a("br"),t._v("\n闭包就是能够读取其他函数内部变量的函数")])]),t._v(" "),a("p",[t._v("闭包的原文是 Closure，跟「包」没有任何关系，闭包常常用来「间接访问一个变量」。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"前端安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端安全","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端安全")]),t._v(" "),a("ol",[a("li",[t._v("什么是xss攻击\n黑客想尽一切方法，将一段脚本内容放到目标网站的目标浏览器上解析执行")])]),t._v(" "),a("p",[t._v("危害：")]),t._v(" "),a("ul",[a("li",[t._v("窃取网页浏览中的cookie值")]),t._v(" "),a("li",[t._v("劫持流量实现恶意跳转")])]),t._v(" "),a("p",[t._v("防范方法：")]),t._v(" "),a("ul",[a("li",[t._v("过滤所有 HTML JS CSS标签，利用 escapeHTML 方法")]),t._v(" "),a("li",[t._v("对特殊符号进行转义")]),t._v(" "),a("li",[t._v("限制输入长度")])])])},[],!1,null,null,null);n.default=r.exports}}]);