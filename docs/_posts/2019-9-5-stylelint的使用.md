---
title: stylelint的使用
date: 2019-09-05
tags:
  - Stylelint
  - 工具
category: 前端
banner: /blog/img/banner/31.jpg
---

## 安装依赖
```sh
yarn add stylelint stylelint-config-standard stylelint-order stylelint-scss --dev
```
## 配置文件

### `.stylelintrc.json`文件
```json
{
  "processors": [],
  "extends": [
    "stylelint-config-standard"
  ],
  "defaultSeverity": "error",
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    "max-nesting-depth": 3,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "always",
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "float",
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "osx-font-smoothing",
      "font-style",
      "font-weight",
      "hyphens",
      "src",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "color",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",
      "word-break",
      "word-wrap",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "pointer-events",
      "cursor",
      "background",
      "background-attachment",
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-collapse",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",
      "content",
      "quotes",
      "outline",
      "outline-offset",
      "opacity",
      "filter",
      "visibility",
      "size",
      "zoom",
      "transform",
      "box-align",
      "box-flex",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "table-layout",
      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "background-clip",
      "backface-visibility",
      "resize",
      "appearance",
      "user-select",
      "interpolation-mode",
      "direction",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak"
    ]
  }
}
```
### `.stylelintignore`文件
忽略不需要检查的目录
```
build
config
static
dist
```

## 脚本命令
```json
"scripts": {
  "stylelint": "stylelint src/*.{html,vue,css,sass,scss} --cache --fix"
}
```

## 参考链接
- [如何为你的 Vue 项目添加配置 Stylelint](https://juejin.im/post/5c31c9a16fb9a049f8197000)
- [vscode 全局安装和配置 stylelint 像 webstorm 等 ide 一样来检查项目](https://www.cnblogs.com/eastegg/p/9244135.html)
- [eslint，stylelint的基本配置使用](https://blog.csdn.net/zm06201118/article/details/90069650)
- [stylelint配置规则](https://stylelint.io/user-guide/rules/number-leading-zero#number-leading-zero)




