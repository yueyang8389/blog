---
title: 用vuepress搭建个人博客
date: 2019-08-10
tags:
  - Vuepress
  - 工具
category: 前端
banner: /blog/img/banner/7.jpg
---

使用vuepress搭建个人博客流程
<!-- more -->

结合GitHub Pages 搭建的博客，还没有GitHub Pages，参考[Create a GitHub Pages Repository](https://pages.github.com/)创建你的专属博客仓库。

## 脚手架安装

```sh
yarn create vuepress [appName]
```
根据提示一步步来
![image](/blog/img/post/vuepress-blog-3.png)

## 安装依赖

```sh
yarn && yarn dev
```
默认的博客主题是长这样的
![image](/blog/img/post/vuepress-blog-2.png)

## 项目结构

```
.
├── README.md
├── blog
│   └── _posts
│   └──.vuepress
│       ├── components
│       │   ├── Foo
│       │   ├── OtherComponent.vue
│       │   └── demo-component.vue
│       ├── config.js
│       ├── enhanceApp.js
│       └── styles
│           ├── global.styl
│           ├── index.styl
│           └── palette.styl
├── package.json
└── yarn.lock
```

#### `_post`
文件夹为存放博客的目录。

#### `.vuepress`文件夹
  - `components`编写自定义主题，请忽略
  - `styles`可以更改当前主题的样式，[修改主题样式](https://v1.vuepress.vuejs.org/zh/config/#palette-styl)
  - `config`配置你的博客，[修改博客配置](https://v1.vuepress.vuejs.org/zh/config/)

## 添加博客

现在你可以在_post目录下，添加一个你自己的博客了，博客使用markdown语法，如果对markdown不了解可以[markdown-入门参考](http://xianbai.me/learn-md/index.html)

#### 命名格式

博客名必须遵循yyyy-mm-dd-blogname.md的格式。

#### 头部链接

```js
---
date: 2019-8-8 // 和文件名的日期一致
tag:
  - 编程
author: 一修
location: Manila
---
```

## 添加分类

比如我要在头部添加一个相册的分类，打开`config.js`文件在`themeConfig`中添加一下代码，详细配置选项可以[参考这里](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#directory-classifier)
```js
modifyBlogPluginOptions(options) {
    const photographyDirectoryClassifier = {
      id: 'photography',
      dirname: '_photography',
      path: '/photography/',
      itemPermalink: '/photography/:year/:month/:day/:slug',
      pagination: {
        lengthPerPage: 5,
      },
    }

    options.directories.push(photographyDirectoryClassifier)
    return options
  },
```

然后在`nav`中添加导航

```js
nav: [
    {
      text: '图集',
      link: '/photography/',
    },
  ],
```

## 设置favicon

在`.vuepress`文件夹下面新增`public`文件夹，将名为`favicon.ico`的文件放入其中即可。

## 打包部署

在项目根目录新建一个`deploy.sh`文件，添加以下内容
```js
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

在`package.json`添加脚本命令

```json
"scripts": {
  "deploy": "bash deploy.sh"
}
```

## 添加插件

> [社区插件](https://github.com/ulivz/awesome-vuepress#community-plugins)

#### 返回顶部插件

##### 安装

```sh
yarn add -D @vuepress/plugin-back-to-top@next
```

##### 使用

```js
plugins: ['@vuepress/back-to-top']
```

#### 谷歌网站统计

##### 安装

```js
yarn add -D @vuepress/plugin-google-analytics@next
```

##### 使用
```js
plugins: [
  [
    '@vuepress/google-analytics',
    {
      'ga': '' // UA-00000000-0
    }
  ]
]
```
> 没有google-analytics账号，[点击这里](https://marketingplatform.google.com/about/)注册,然后换上你的id就可以了

#### 图片预览

官方的`@vuepress/plugin-medium-zoom@next`，不是很好用，需要重新刷新页面才能出来。

##### 安装

```sh
yarn add -D vuepress-plugin-zooming
```

##### 使用

```js
plugins: [
  [
    'vuepress-plugin-zooming',
    {
      selector: '.vuepress-blog-theme-content img',
      delay: 1000,
    }
  ],
]
```

#### PWA（serviceWorker）

内容更新，重新打包上线后，提示弹窗让用户刷新。

##### 安装

```sh
yarn add -D @vuepress/pwa
```

##### 使用

```js
plugins: [
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '新内容来袭！',
        buttonText: '刷新',
      }
    }
  ],
]
```

#### SEO优化

搜索引擎优化，这样别人就更容易搜索到你博文。

##### 安装

```sh
yarn add -D vuepress-plugin-seo
```

##### 使用

```js
plugins: [
  ['vuepress-plugin-seo']
]
```

#### 平滑的滚动

由于 `<a>` 标签的锚点是直接就定位过去了，很生硬，这个插件可以提供平滑的滚动。

##### 安装

```sh
yarn add -D vuepress-plugin-smooth-scroll
```

##### 使用

```js
plugins: [
  ['vuepress-plugin-smooth-scroll']
]
```

#### 阅读进度条

用户阅读时，在顶部提供一个阅读进度提示条。

##### 安装

```sh
yarn add -D vuepress-plugin-reading-progress
```

##### 使用

```js
plugins: [
  ['vuepress-plugin-reading-progress']
]
```

#### 阅读统计

可以统计当前页面的字数，提供参考的阅读时间。
> 统计中文字数会不准，英文没有问题。

##### 安装

```sh
yarn add -D vuepress-plugin-reading-time
```

##### 使用

```js
plugins: [
  ['vuepress-plugin-reading-time']
]

// .md文件中，双花括号访问
{{$page.readingTime.words}} // 总字数
{{Math.ceil($page.readingTime.minutes)}} // 阅读时长
```

#### 最后更新时间

可以显示你更新当前博文的最后时间，不需要安装，内置了。

##### 使用

```js
plugins: [
  [''@vuepress/last-updated'']
]

// .md文件中，双花括号访问
{{ $page.lastUpdated }}
```

## 评论系统

基于Valine的评论系统

> [VuePress博客搭建笔记（二）个性化配置](https://segmentfault.com/a/1190000017953711)  
> [给你的 VuePress 添加 Gitalk 评论插件吧](https://juejin.im/post/5c9e30fb6fb9a05e1c4cecf6)  
> [Valine - 一款快速、简洁且高效的无后端评论系统](https://valine.js.org/)  


如果你没有 valine 账号，请到 [LeanCloud](https://console.leancloud.app/login.html#/signup) 注册，建议你注册时在右上角选择国际版，免去实名认证的步骤，登陆完成后，先绑定你的手机号和邮箱，然后开始创建应用，获取你的 appId 和 appKey。

##### 安装

```sh
yarn add -D valine leancloud-storage
```

##### 使用

在`.vuepress`中添加`comment`文件夹，在`comment`中新建`comment.vue`文件，粘贴以下代码，这里我融合最后更新时间。

```js
<template>
  <div class="vcomments" style="padding-top: 30px;">
    <p v-if="!excludePath" style="text-align: right;font-size: 14px;">
      <i>最后更新时间：{{ $page.lastUpdated }}</i>
    </p>
    <div id="vcomments"></div>
    <!-- id 将作为查询条件 -->
    <span :id="$page.path" class="leancloud-visitors">
      <em class="post-meta-item-text">阅读量</em>
      <i class="leancloud-visitors-count">0</i>
    </span>
  </div>
  </template>

  <script>
  export default {
    name: 'comment',
    computed:{
      // 不添加最后更新时间的文件
      excludePath(){
        const path = decodeURI(this.$page.path);
        return /(树洞|about)/.test(path);
      }
    },
    mounted(){
      const Valine = require('valine');
      const LeancloudStorage = require('leancloud-storage');
      if (typeof window !== 'undefined') {
        this.window = window;
        window.AV = LeancloudStorage;
      }
      this.valine = new Valine()
      this.initValine();
    },
    methods:{
      // 初始化valine实例
      initValine(){
        this.valine.init({
          el:'#vcomments',
          appId: 'your appId',
          appKey: 'your appKey',
          visitor: true, // 开启阅读统计
          path: window.location.pathname,
          placeholder: '野马也，尘埃也，生物之以息相吹也...',
          // other config
        })
      }
    }
  }
</script>
```

接下来做一些自动化的工作，给所有`.md`文件添加组件标签，这样就不用每个都手写了。
首先在根目录添加`builds`文件夹，然后在`builds`里面创建三个文件`findMarkdown.js`、`addComponents.js`、`delComponents.js`

在`findMarkdown.js`贴上以下内容，用来查找工作区所有`.md`文件的。

```js
const fs = require('fs');
// 不需要添加评论插件的文件
const excludesFileName = ['image', '.DS_Store', '.vuepress'];

function findMarkdown(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err

    files.forEach((fileName) => {

      if (!excludesFileName.includes(fileName)) {
        let innerDir = `${dir}/${fileName}`

        if (fileName.indexOf('.') !== 0) {
          fs.stat(innerDir, function (err, stat) {

            if (stat.isDirectory()) {
              findMarkdown(innerDir, callback)
            } else {
              callback(innerDir)
            }
          })
        }
      }

    })
  })
}

module.exports = findMarkdown
```

在`addComponents.js`贴上以下内容，用来给所有`.md`文件添加评论组件。

```js
const fs = require('fs');
const findMarkdown = require('./findMarkdown');
const rootDir = './docs';

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  fs.appendFile(dir, `\n \n <comment-comment/> \n `, (err) => {
    if (err) throw err
    console.log(`add components to ${dir}`)
  })
}
```

在`delComponents.js`贴上以下内容，打包后删除所有的`.md`的评论插件，开发环境下不需要，不然下次打包就会重复添加。

```js
const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, delComponents)

function delComponents(dir) {
  fs.readFile(dir, 'utf-8', (err, content) => {
    if (err) throw err

    fs.writeFile(dir, content.replace(/\n \n <comment-comment\/> \n /g, ''), (err) => {
      if (err) throw err
      console.log(`del components from ${dir}`)
    })
  })
}
```

修改`package.json`文件

```json
"scripts": {
  "build": "node ./builds/addComponents.js && vuepress build docs && node ./builds/delComponents.js",
},
```

下次打包部署的时候插件就上去了。

## 社区主题

如果不喜欢默认博客主题，可以从[社区主题](https://github.com/ulivz/awesome-vuepress#Themes)中选择自己喜欢的。


## 参考链接

- [vuepress](https://v1.vuepress.vuejs.org/zh/config/)
- [@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/)
- [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)

## 我的配置

最后贴上我的完整配置

##### config.js
```js
module.exports = {
  base: "/",
  dest: 'dist',
  title: 'Yixiu',
  description: 'This is a blog built by VuePress',
  theme: "@vuepress/blog",
  themeConfig: {
    nav: [
      {
        text: '编程',
        link: '/',
      },
      {
        text: '文集',
        link: '/writings/',
      },
      {
        text: '摄影',
        link: '/photography/',
      },
      {
        text: '吉他',
        link: '/guitar/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/yueyang8389',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/b93rGtnpY6laBgB',
        },
      ],
      copyright: [
        {
          text: '夫唯不争，故天下莫能与之争',
          link: '',
        },
        {
          text: 'YIXIU © 1992-present ',
          link: '',
        },
      ],
    },
    modifyBlogPluginOptions(blogPlugnOptions) {

      const classifier = [
        'writings',
        'photography',
        'guitar',
      ]

      for (let i = 0; i < classifier.length; i++) {
        const element = classifier[i];
        const classifyItem = {
          id: element,
          dirname: `_${element}`,
          path: `/${element}/`,
          itemPermalink: `/${element}/:year/:month/:day/:slug`,
          pagination: {
            lengthPerPage: 10,
          },
        };
        blogPlugnOptions.directories.push(classifyItem);
      }

      return blogPlugnOptions;
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '新内容来袭！',
          buttonText: '刷新',
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145088955-1'
      }
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.vuepress-blog-theme-content img',
        delay: 1000,
      }
    ],
    ['vuepress-plugin-seo'],
    ['vuepress-plugin-reading-time'],
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-reading-progress'],
  ]
}
```

##### index.styl
```css
$theme = #4285f4
$white = #fbfbfb

body
  background-color: $white

header
  background-color: $white !important

.mobile-header-bar
  background-color: $white !important

.vuepress-blog-theme-content
  background-color: $white !important

.vuepress-blog-theme-content
  blockquote
    border-left: 3px solid $theme

.mobile-nav
  display: flex
  justify-content: space-around
  padding-left: 0;
  .nav-link.router-link-active, .nav-link:hover
    border-bottom: 1.5px solid $theme
  .nav-link
    padding-bottom: 5px

.global-ui .sw-update-popup button
  background: $theme !important

input, textarea
  -webkit-appearance: none
```

##### palette.styl
```css
$theme = #4285f4

$accentColor = $theme
$textColor = #2c3e50
$borderColor = rgba(0,0,0,.05)
$codeBgColor = #282c34
```

