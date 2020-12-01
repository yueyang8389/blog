/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/07/25/代码规范，写出无暇代码/index.html",
    "revision": "acced67bb42ce22be418b25bdb31d9dd"
  },
  {
    "url": "2019/08/01/博弈论基础/index.html",
    "revision": "17ed939b873a5eb3954328927280247c"
  },
  {
    "url": "2019/08/05/一修吉他课堂-乐理篇/index.html",
    "revision": "70cfd95a74fe29dc3eb8546534b9f756"
  },
  {
    "url": "2019/08/05/读庄子-1/index.html",
    "revision": "d0a70e3e8635a8762d951ab95743f5ac"
  },
  {
    "url": "2019/08/08/gulp的使用/index.html",
    "revision": "7f659e770426308782b5dc9036e3bfbe"
  },
  {
    "url": "2019/08/08/我的小鱼你醒了/index.html",
    "revision": "dc275c3ba0f95751b23a28d041c3eee2"
  },
  {
    "url": "2019/08/10/vuepress搭建个人博客/index.html",
    "revision": "0e23b0d5211bef03f709a7236e6c4aa7"
  },
  {
    "url": "2019/08/10/金刚经/index.html",
    "revision": "669ed000526914907f9126d0e7aafb1c"
  },
  {
    "url": "2019/08/11/用手机拍出高赞照片-技巧篇/index.html",
    "revision": "329f9ec65a39ff6ad499dbe84d1f0f75"
  },
  {
    "url": "2019/08/12/css-常用技巧篇/index.html",
    "revision": "d80a94e8842ed939dc25eac7e8cad8c4"
  },
  {
    "url": "2019/08/12/鲁米的诗-一/index.html",
    "revision": "27474e302d6f9b1ee76b4c57a4a3c433"
  },
  {
    "url": "2019/08/12/鲁米的诗-二/index.html",
    "revision": "bf286a7cca7a1ee04bc6f9561a79a15b"
  },
  {
    "url": "2019/08/13/canvas的使用/index.html",
    "revision": "a57cc86381a831f21992bf35250b2290"
  },
  {
    "url": "2019/08/17/用手机拍出高赞照片-构图篇/index.html",
    "revision": "033dd103374a6041aada7df991ca5808"
  },
  {
    "url": "2019/08/18/用手机拍出高赞照片-造型篇/index.html",
    "revision": "019a0249b897e9a21c97f5181927ae3e"
  },
  {
    "url": "2019/08/20/国风·召南·草虫/index.html",
    "revision": "8c89b3f23389428b2d41fd549717f184"
  },
  {
    "url": "2019/08/22/微信使用的奇技淫巧/index.html",
    "revision": "5eec52b37691b61143a274dfcc290a40"
  },
  {
    "url": "2019/08/28/用手机拍出高赞照片-修图篇/index.html",
    "revision": "80aaca9a8da3785da2ebb83248b1bbb3"
  },
  {
    "url": "2019/08/29/vscode-插件篇/index.html",
    "revision": "b24e57f77fd4e85aeeba89e26fb03cf0"
  },
  {
    "url": "2019/08/29/树洞/index.html",
    "revision": "312fdc91bb73df22a7e404304e07cfb8"
  },
  {
    "url": "2019/08/29/英语学习-短语篇/index.html",
    "revision": "d1c71c1490a8a98530a62a19ef9b5497"
  },
  {
    "url": "2019/08/29/英语学习-词汇篇/index.html",
    "revision": "0a305f799ac2f832e3c4c7b935afb527"
  },
  {
    "url": "2019/08/29/英语学习-金句篇/index.html",
    "revision": "a3040fb11ba17c8300f6c49790121aa3"
  },
  {
    "url": "2019/09/02/常用工具函数收集/index.html",
    "revision": "b1068c0fb0f9a3798939bfbce4746981"
  },
  {
    "url": "2019/09/02/常用正则收集/index.html",
    "revision": "7730651478de3313919367270d21f8c2"
  },
  {
    "url": "2019/09/02/移动端适配-工具函数/index.html",
    "revision": "a05616ddf09344d6b60944bcdd940f1b"
  },
  {
    "url": "2019/09/03/axios封装/index.html",
    "revision": "cd1c50e199fea48c1d9e4e9be5f88e18"
  },
  {
    "url": "2019/09/03/fetch封装/index.html",
    "revision": "a8c2689575d1d8cffe1ad2b3206d5ac2"
  },
  {
    "url": "2019/09/04/移动端适配-css篇/index.html",
    "revision": "829c37149488f1e4464764d4af98a385"
  },
  {
    "url": "2019/09/05/eslint的使用/index.html",
    "revision": "2b5b8cecd35d53c03ae4a35543c25277"
  },
  {
    "url": "2019/09/05/stylelint的使用/index.html",
    "revision": "dfd92b0e86b4cbd0a322924cc5723555"
  },
  {
    "url": "2019/09/05/配置-editorconfig文件/index.html",
    "revision": "a82bb9cddcd2b168b8f3a3634992b1c6"
  },
  {
    "url": "2019/09/06/react-redux的使用/index.html",
    "revision": "a4e20d2808738d4ce0c0e58dfa9c76f6"
  },
  {
    "url": "2019/09/06/react笔记/index.html",
    "revision": "7b1acd2f6b46b058cbdcecc6762b2bd4"
  },
  {
    "url": "2019/09/06/面试题收集/index.html",
    "revision": "c649dd9867a53d6d63d70ab52ac742cd"
  },
  {
    "url": "2019/09/07/react-hooks的使用/index.html",
    "revision": "5371b3d90e4c967bf4183d8757f9f832"
  },
  {
    "url": "2019/09/08/react-lifecycle的使用/index.html",
    "revision": "42a11b32e5cee1cd4cc7547ce9d9f472"
  },
  {
    "url": "2019/09/09/js执行机制-宏任务与微任务/index.html",
    "revision": "a2a21d5618b9b5c5f57dc95686dca494"
  },
  {
    "url": "2019/09/09/sh更新脚本/index.html",
    "revision": "df8eb9e550cd071f0cd3ef4694882954"
  },
  {
    "url": "2019/09/11/面试总结/index.html",
    "revision": "3080a218f301eef3ad7b4267f7d37f2e"
  },
  {
    "url": "2019/09/12/react-native笔记/index.html",
    "revision": "70b6dd078469ca19349e9208b1612ecf"
  },
  {
    "url": "2019/09/13/掌握好声音的诀窍/index.html",
    "revision": "0aa1c76c7be91c79d0955839fdb511e4"
  },
  {
    "url": "2019/09/20/react-router的使用/index.html",
    "revision": "6fb33fd0681610f959b9fb5febafa596"
  },
  {
    "url": "2019/09/23/js笔记/index.html",
    "revision": "9ae24197c11912c987faf62dbbad9f83"
  },
  {
    "url": "2019/10/23/css-修改浏览器滚动条、输入框默认样式/index.html",
    "revision": "1df310203daf5ff72cb7313e9cf909e1"
  },
  {
    "url": "2019/10/23/moment获取昨天、本周、本月/index.html",
    "revision": "37ad4e0d0fc8e7bbcf059ef8f449533d"
  },
  {
    "url": "2019/12/06/canvas将图片转为base64/index.html",
    "revision": "45a3359daf9b6e07f33187f1f3cd3c7b"
  },
  {
    "url": "2019/12/06/git代码提交规范/index.html",
    "revision": "d08393ee5eac93e4cc5df5a36c3334a9"
  },
  {
    "url": "2019/12/06/git贮藏与版本回滚/index.html",
    "revision": "cb61fbe27f405d7d524bf0dbc34e1871"
  },
  {
    "url": "2019/12/06/记录一次loading制作/index.html",
    "revision": "c9b46a6eb320813acf1eb3b40009c6e1"
  },
  {
    "url": "2019/12/06/项目接口规范/index.html",
    "revision": "499bef61d9db43b21b684ddbcb8a36d8"
  },
  {
    "url": "2019/12/12/移动端开发总结/index.html",
    "revision": "24f2fbb0ea4d367453a388e2da1882da"
  },
  {
    "url": "2019/12/23/拦截浏览器后退事件/index.html",
    "revision": "1f0d645ce027df00b7449aa3c394b878"
  },
  {
    "url": "2020/01/29/iscroll无限滚动应用实践/index.html",
    "revision": "dbbf89c50b78799a4e3d9b3bc5afee6e"
  },
  {
    "url": "2020/02/08/pixi学习笔记/index.html",
    "revision": "0e1313a2ff719ef370061c0dedb292fa"
  },
  {
    "url": "2020/03/07/一修吉他课堂-课程纪实/index.html",
    "revision": "7d6924bd592969f758ef4f459788d06e"
  },
  {
    "url": "2020/03/07/前端知识导图/index.html",
    "revision": "fe442786a0fa20c47aa2da7503ea1fee"
  },
  {
    "url": "2020/04/08/yamljs转换yml为json/index.html",
    "revision": "b826710069739b201433c8fee73444fc"
  },
  {
    "url": "2020/04/10/jenkins配置/index.html",
    "revision": "1641fede0a50a81ed69a6e62a1117481"
  },
  {
    "url": "2020/04/15/知识点总结/index.html",
    "revision": "39a46d806ef572e7acaa1889c5d0e992"
  },
  {
    "url": "404.html",
    "revision": "b8ff63eeb9d5244e4b1e31b8fb95394d"
  },
  {
    "url": "archive/index.html",
    "revision": "c1b501610f7b0f2ac59553faeb9cb298"
  },
  {
    "url": "assets/css/0.styles.3dc5456e.css",
    "revision": "1f29a0129c4abe04a1f6ba18109c011d"
  },
  {
    "url": "assets/js/1.ad1c6df9.js",
    "revision": "5aa54d971d12e8767761f61dd72f962c"
  },
  {
    "url": "assets/js/10.119d21a2.js",
    "revision": "45ef56aed3e9e9250ad747ef4fd3bc87"
  },
  {
    "url": "assets/js/11.5dd619dd.js",
    "revision": "25bdc50f2b9a07ca30f5d5bf2c5efec8"
  },
  {
    "url": "assets/js/12.e1ddbdb0.js",
    "revision": "5dc2ca3880f76723cce255461dcdf925"
  },
  {
    "url": "assets/js/13.8bb719cf.js",
    "revision": "395ade449809e14f2f3b5ba1e4ab7332"
  },
  {
    "url": "assets/js/14.b577a63c.js",
    "revision": "1d9532d781fac4076c0b05c4db4cf838"
  },
  {
    "url": "assets/js/15.6ea9766f.js",
    "revision": "d67be0ddd8e9d8b50157f080b644e6db"
  },
  {
    "url": "assets/js/16.81bdff1a.js",
    "revision": "0442e2057769d86481b2ab5f3af726bf"
  },
  {
    "url": "assets/js/17.d62f6392.js",
    "revision": "02ecee122c7d33dc422b40aad7fdf2c0"
  },
  {
    "url": "assets/js/18.5cef1245.js",
    "revision": "efeee1608ca229d27fdb898ddd542e96"
  },
  {
    "url": "assets/js/19.e98f91fc.js",
    "revision": "063be0140daab807d3792de6d212b32d"
  },
  {
    "url": "assets/js/20.4acd0d5f.js",
    "revision": "782a7c91b29a31c4349477530f85bd66"
  },
  {
    "url": "assets/js/21.ec603072.js",
    "revision": "5b8b712fc40bb18b45d0c3259136d2f0"
  },
  {
    "url": "assets/js/22.52595333.js",
    "revision": "b450bdd330bbb420a944793d6cd19333"
  },
  {
    "url": "assets/js/23.d951ca31.js",
    "revision": "387900736759492bd18938a571382a85"
  },
  {
    "url": "assets/js/24.2e33081c.js",
    "revision": "10b16f5a712dc0eb41cb157150b49738"
  },
  {
    "url": "assets/js/25.c98e04b8.js",
    "revision": "9a3c140f65b843c189d0accdc1f6a362"
  },
  {
    "url": "assets/js/26.a8bd25f9.js",
    "revision": "9876ff36171302fc4842602d5cb7b4c8"
  },
  {
    "url": "assets/js/27.92b61840.js",
    "revision": "0a4f862b22f6800d49e975e1662854e2"
  },
  {
    "url": "assets/js/28.71d2b462.js",
    "revision": "200362f01794538a26ebbc821e9f6bf9"
  },
  {
    "url": "assets/js/29.e4edff57.js",
    "revision": "9d4a300d8261584aeb96f46ca493129e"
  },
  {
    "url": "assets/js/3.7c192d32.js",
    "revision": "484e4d11958e4bb3725974f9ca928d87"
  },
  {
    "url": "assets/js/30.f52e6d44.js",
    "revision": "a8d1a32d1cc090ed233bf0b52ef68af3"
  },
  {
    "url": "assets/js/31.faefb883.js",
    "revision": "94cfacd2bab8709f3962c97c4084e89a"
  },
  {
    "url": "assets/js/32.bb5540df.js",
    "revision": "7600a5aeb378eb04548ad73c8d1825f8"
  },
  {
    "url": "assets/js/33.961b471c.js",
    "revision": "163e25e21500c6de7c755e6b1a2a8e1c"
  },
  {
    "url": "assets/js/34.9d7344a7.js",
    "revision": "32d9af521397aef98ac6d09a9f5ac6cd"
  },
  {
    "url": "assets/js/35.b917e3d3.js",
    "revision": "a8fe052310039d4fc14fad3340c06056"
  },
  {
    "url": "assets/js/36.ec8be7c0.js",
    "revision": "0a1dc51d871b6a359626451bbad10887"
  },
  {
    "url": "assets/js/37.017fed94.js",
    "revision": "307857f6ffc81d4c85b7a10ad1b71527"
  },
  {
    "url": "assets/js/38.54901f30.js",
    "revision": "0fa182d153c6160cc2c1e03eff239fa2"
  },
  {
    "url": "assets/js/39.367259e3.js",
    "revision": "1fa303cb42872a171cc71f725f25a5d9"
  },
  {
    "url": "assets/js/4.883ab845.js",
    "revision": "fce653e7504d6ac425555a652b31fbc0"
  },
  {
    "url": "assets/js/40.f49b7a2a.js",
    "revision": "eb4f586076160e723ee6fe51611a5618"
  },
  {
    "url": "assets/js/41.dcbd0fad.js",
    "revision": "fa8e28bcbc43fbfdc2112d8e63693625"
  },
  {
    "url": "assets/js/42.e5e1e673.js",
    "revision": "0ea978cb68b713e34c8a62a2bd9c1c42"
  },
  {
    "url": "assets/js/43.0da8a252.js",
    "revision": "817df83192594e9efa6b31bc89618913"
  },
  {
    "url": "assets/js/44.e33b0c30.js",
    "revision": "a9b449ebe5afae7271f6a3bd3405ca88"
  },
  {
    "url": "assets/js/45.2ff9d912.js",
    "revision": "9ebaf81a41e12033dac5cecd7eb99d00"
  },
  {
    "url": "assets/js/46.4eca29e4.js",
    "revision": "1b8d3ec01f0a006fc65a0ffce9b2f275"
  },
  {
    "url": "assets/js/47.5639f6bd.js",
    "revision": "75ff7b3132d0e5236961cdb4e3dedc20"
  },
  {
    "url": "assets/js/48.827dcaaa.js",
    "revision": "5b1e6a7977273ba70bc62db7409034d1"
  },
  {
    "url": "assets/js/49.abd1f3bb.js",
    "revision": "11a6bcdc9fe01990a3bb14575acf8403"
  },
  {
    "url": "assets/js/5.eb4ca22f.js",
    "revision": "e6e377e36fce25ff9f9fb2a61876ba84"
  },
  {
    "url": "assets/js/50.5a011a9f.js",
    "revision": "6ff605d17cf3151ebc9c6ce3e6ce1c68"
  },
  {
    "url": "assets/js/51.344507aa.js",
    "revision": "9877fc47b76005863c4fcfe8c11720b7"
  },
  {
    "url": "assets/js/52.3a6e9ac4.js",
    "revision": "309c0d0f9e7c1245fa837325f812c678"
  },
  {
    "url": "assets/js/53.e62a8557.js",
    "revision": "06f3f42a284ec08652506761de0a6c7c"
  },
  {
    "url": "assets/js/54.bdd3e49a.js",
    "revision": "67c9cde168423fa7d5978bc36bfed0c1"
  },
  {
    "url": "assets/js/55.c710cf3c.js",
    "revision": "3351584257d3c681c474415eacc163f1"
  },
  {
    "url": "assets/js/56.c001f22f.js",
    "revision": "633bdb9909e7830ab4d306d0763e2586"
  },
  {
    "url": "assets/js/57.af5e932d.js",
    "revision": "bdb93ddb8947b67350b2f77cf2598331"
  },
  {
    "url": "assets/js/58.a00976ac.js",
    "revision": "6e6ff44c04c64114d7f8f01a5c823fd8"
  },
  {
    "url": "assets/js/59.cd51bf8b.js",
    "revision": "f1db66ff94932a9efbbed215367fa50d"
  },
  {
    "url": "assets/js/6.c7f506f2.js",
    "revision": "2638fa1d484db164956a4c9ed5e6462c"
  },
  {
    "url": "assets/js/60.405a4fcb.js",
    "revision": "cf52a8e92219117c622a76c91c7e58d8"
  },
  {
    "url": "assets/js/61.1cb0371f.js",
    "revision": "f1768689c34837f60c5aabdae3114508"
  },
  {
    "url": "assets/js/62.eed5dd3b.js",
    "revision": "9720cb09fc50c98be968cd31988e84ab"
  },
  {
    "url": "assets/js/63.e5cf498a.js",
    "revision": "a84d66e2474fa9a21c3c07f0e8c794d2"
  },
  {
    "url": "assets/js/64.7328248a.js",
    "revision": "ad47d668a8db7ac87acd18f8379f9fb2"
  },
  {
    "url": "assets/js/65.702d1fdc.js",
    "revision": "4bb6cfc1ba5903d89884a944298f8d9b"
  },
  {
    "url": "assets/js/66.e56154a7.js",
    "revision": "af7ecfa3fc469ba6b860db1c271d8c0c"
  },
  {
    "url": "assets/js/67.8578e56b.js",
    "revision": "9aba31f3b18a3123a96fdc19173164d5"
  },
  {
    "url": "assets/js/68.5c7f3e81.js",
    "revision": "f4c70bab55e544cd354f809371697717"
  },
  {
    "url": "assets/js/69.fac65911.js",
    "revision": "7c1311149496274f7bfc69b77c538235"
  },
  {
    "url": "assets/js/7.bb5b18bd.js",
    "revision": "18172c3541acf7c61f5b821f11ce858c"
  },
  {
    "url": "assets/js/70.b6a03af0.js",
    "revision": "435156847cad9412de0dff4c66787770"
  },
  {
    "url": "assets/js/71.d79413b6.js",
    "revision": "f9b1a3143237973eb0f63867781b60ca"
  },
  {
    "url": "assets/js/72.8064390a.js",
    "revision": "440755d09188a69fe49ceb8d6f0ab8db"
  },
  {
    "url": "assets/js/73.82045164.js",
    "revision": "eb28a4b4ce9ae5b0ce46293395e07ca9"
  },
  {
    "url": "assets/js/74.71ef436a.js",
    "revision": "e9019a08dfa381440c344db4dfba0f57"
  },
  {
    "url": "assets/js/75.0d1d9cff.js",
    "revision": "acb68ccefaf7d19c044fcef289acf308"
  },
  {
    "url": "assets/js/76.ca10f59e.js",
    "revision": "3ff27d9bb6a6551d8b5e1819d476315b"
  },
  {
    "url": "assets/js/77.76f431f6.js",
    "revision": "4eda4fb36a5314ed8cb2a0b686d83b54"
  },
  {
    "url": "assets/js/78.0a8a3fd4.js",
    "revision": "d46ef557c515fcdb5eca0c59d57f1533"
  },
  {
    "url": "assets/js/8.08270404.js",
    "revision": "97023800e3db9c8fc7ec788823b31b47"
  },
  {
    "url": "assets/js/9.44ecce9c.js",
    "revision": "2213d7ccd7ab03f314ea4453086e7087"
  },
  {
    "url": "assets/js/app.d24d012a.js",
    "revision": "a692a12254a9328bd8585df85e877a68"
  },
  {
    "url": "category/index.html",
    "revision": "42a55de7469047cb1b3bb77a13c81752"
  },
  {
    "url": "category/前端.html",
    "revision": "3bb507c75f14431df8be9b125c32b85a"
  },
  {
    "url": "category/摄影.html",
    "revision": "9f3b42724e2873e43f6c2fe9d7e2150a"
  },
  {
    "url": "category/树洞.html",
    "revision": "b84e521f683e6876efac8f9c5d0b18fd"
  },
  {
    "url": "category/生活.html",
    "revision": "9c14bd8251a1e9d125e579bc5331b57f"
  },
  {
    "url": "category/英语.html",
    "revision": "111dc6b0c5c9efcb760466cee42712b9"
  },
  {
    "url": "category/读书.html",
    "revision": "bc8f8f495af03932cd1420e8115d40ff"
  },
  {
    "url": "category/面试.html",
    "revision": "97a531c7c0ffe5e322e178c7a2af364b"
  },
  {
    "url": "category/音乐.html",
    "revision": "ca7b07e11caa77344afb99c5abdf9c0f"
  },
  {
    "url": "img/banner/1.jpg",
    "revision": "da26d486cdb6a8efb794f87d935f580f"
  },
  {
    "url": "img/banner/10.jpg",
    "revision": "737491edd9e99433b175c9bad6d9267e"
  },
  {
    "url": "img/banner/11.jpg",
    "revision": "4c41f0407159334e7c0d40d5694caf32"
  },
  {
    "url": "img/banner/15.jpg",
    "revision": "b2c97feae2a38a7d80940b9e5488705f"
  },
  {
    "url": "img/banner/16.jpg",
    "revision": "1a4a3e7c43a256f8be6cc4efd7d141fa"
  },
  {
    "url": "img/banner/17.jpg",
    "revision": "fc5a86138753fbfca75985fca3fb65bd"
  },
  {
    "url": "img/banner/19.jpg",
    "revision": "3ed75c9e5a62d5dfa2ba7ae1e8975560"
  },
  {
    "url": "img/banner/2.jpg",
    "revision": "068218e6a877bcfc92b0e511dfca9d0e"
  },
  {
    "url": "img/banner/20.jpg",
    "revision": "644b4147f99c4938dfcbae1ecb163979"
  },
  {
    "url": "img/banner/21.jpg",
    "revision": "8c90f7b6196e74d8790ab708d1a1388c"
  },
  {
    "url": "img/banner/22.jpg",
    "revision": "92562989611274654f916002c7210a89"
  },
  {
    "url": "img/banner/23.jpg",
    "revision": "d4472be5412527c7186667ff0e862d7d"
  },
  {
    "url": "img/banner/24.jpg",
    "revision": "18c9663375a5f2d3afb34d723bcc14c1"
  },
  {
    "url": "img/banner/25.jpg",
    "revision": "ee85f9f860ed47914c2e7e880e20aa37"
  },
  {
    "url": "img/banner/26.jpg",
    "revision": "a8aee600733f3be878927a74a62458bf"
  },
  {
    "url": "img/banner/27.jpg",
    "revision": "4a645e8c891b70f2b20b7f5f7a296690"
  },
  {
    "url": "img/banner/28.jpg",
    "revision": "ebc93c73b6c7ee398268cebe877a7009"
  },
  {
    "url": "img/banner/29.jpg",
    "revision": "11dc78ed87c4436130dcd38da16f04ab"
  },
  {
    "url": "img/banner/3.jpg",
    "revision": "e9be23bbfd6ada6a1e5e3e5818b62ee7"
  },
  {
    "url": "img/banner/30.jpg",
    "revision": "0de0898408683fa2139d238ef3b40ec4"
  },
  {
    "url": "img/banner/31.jpg",
    "revision": "d4f2c694738938b4af785afeb329cfce"
  },
  {
    "url": "img/banner/32.jpeg",
    "revision": "4ccb65721fe249b5a3e856b31667cb41"
  },
  {
    "url": "img/banner/37.jpg",
    "revision": "33a925b12cc6f1566c0025981009b416"
  },
  {
    "url": "img/banner/38.jpg",
    "revision": "b2db7cdaaa9fa9455c113178f8ee448d"
  },
  {
    "url": "img/banner/4.jpg",
    "revision": "29a884b92b61271e40e9dfee3234f9a2"
  },
  {
    "url": "img/banner/40.jpg",
    "revision": "26e732dec0980589de8832e1b50aecf2"
  },
  {
    "url": "img/banner/42.jpg",
    "revision": "848d936072af19442030e5039c65b0f4"
  },
  {
    "url": "img/banner/43.jpg",
    "revision": "4b36dac65f620e1915018ed3b6902fc6"
  },
  {
    "url": "img/banner/45.jpg",
    "revision": "e4376256cb5ef6e37f81adc33a535251"
  },
  {
    "url": "img/banner/47.jpg",
    "revision": "ec01597f3cb2ee9e843ad06689e5eaf6"
  },
  {
    "url": "img/banner/48.jpg",
    "revision": "0fcdd89b45ebf821b9ec28a31cd766d0"
  },
  {
    "url": "img/banner/49.jpeg",
    "revision": "082dee5c6f5ab303f02de739c0d4b075"
  },
  {
    "url": "img/banner/5.jpg",
    "revision": "fe1e0c731922b55be70f2c5d7952d9e8"
  },
  {
    "url": "img/banner/51.jpg",
    "revision": "4706c1fe162c6cb3740ed3e0d0f603e8"
  },
  {
    "url": "img/banner/52.jpg",
    "revision": "3806b6aaf457239a4f722c79d0840da4"
  },
  {
    "url": "img/banner/53.jpg",
    "revision": "b587e5580ecd346953506779de08e6b8"
  },
  {
    "url": "img/banner/54.jpg",
    "revision": "be58ad2973b0103168a617c8b268f37b"
  },
  {
    "url": "img/banner/55.jpg",
    "revision": "bc20b93db04237cb06005df5a082c032"
  },
  {
    "url": "img/banner/56.jpg",
    "revision": "809f94c125acebfa3cc051a2cb224536"
  },
  {
    "url": "img/banner/57.jpg",
    "revision": "bfb982d400d1c156284a5e32e7851be5"
  },
  {
    "url": "img/banner/58.jpg",
    "revision": "48f8a9cc6660423790875b1bdcb91153"
  },
  {
    "url": "img/banner/59.jpeg",
    "revision": "036a4018d30bfb1f6aac086226bf85e9"
  },
  {
    "url": "img/banner/60.jpeg",
    "revision": "d6f4f007df0abaa5a709ad8e6f902a7e"
  },
  {
    "url": "img/banner/61.jpeg",
    "revision": "784437c69bd2cc44d6abbdfbb011cf29"
  },
  {
    "url": "img/banner/8.jpg",
    "revision": "b15728fd2820baa791418d44972ee859"
  },
  {
    "url": "img/banner/9.jpg",
    "revision": "66056d546cb8f4a60ea68790b374ad04"
  },
  {
    "url": "img/guitar/cef1.jpg",
    "revision": "2b863b9abe29a3a64c9244d5ac003fa8"
  },
  {
    "url": "img/guitar/cef2.jpg",
    "revision": "de7d504df4152a29ae54c1729c367e76"
  },
  {
    "url": "img/guitar/four-season.jpg",
    "revision": "d9d746d6d174367745cada37612ef387"
  },
  {
    "url": "img/guitar/guitar-A.png",
    "revision": "c39d191a0897f7c8025802ce19200af9"
  },
  {
    "url": "img/guitar/guitar-A7.png",
    "revision": "669d7d04cd7afde4617c0b1fa116744d"
  },
  {
    "url": "img/guitar/guitar-Am.png",
    "revision": "48625f0ed3852d9e4a8012352c744d55"
  },
  {
    "url": "img/guitar/guitar-B.png",
    "revision": "7be603e6d94d89d26dca19ddbe5f5f13"
  },
  {
    "url": "img/guitar/guitar-B7.png",
    "revision": "3e5842b3faac005dc5b92fe42a180e8b"
  },
  {
    "url": "img/guitar/guitar-bB.png",
    "revision": "098f07bae7394e9f499f0350237aa88d"
  },
  {
    "url": "img/guitar/guitar-Bm.png",
    "revision": "407b89a88d96e8193a3c19f136abab4a"
  },
  {
    "url": "img/guitar/guitar-C.png",
    "revision": "0357840bb94d15015e6cae068b47a8e1"
  },
  {
    "url": "img/guitar/guitar-C7.png",
    "revision": "933f433aedf8c91f0c20150c50b35d58"
  },
  {
    "url": "img/guitar/guitar-CM.png",
    "revision": "d28d683cfd89e2b69f062d1f9eaeed54"
  },
  {
    "url": "img/guitar/guitar-D.png",
    "revision": "303d0b8616ee92bbe01ae6ab5f8db3ee"
  },
  {
    "url": "img/guitar/guitar-D7.png",
    "revision": "9588f42b0ed0629b916d29c8da0e596c"
  },
  {
    "url": "img/guitar/guitar-Dm.png",
    "revision": "6e3e30c6e2b3250c8eab276e1db4f2b6"
  },
  {
    "url": "img/guitar/guitar-E.png",
    "revision": "376e49c8f2be1ec1734c0c19b456a54a"
  },
  {
    "url": "img/guitar/guitar-E7.png",
    "revision": "c2cdca0bffd3ec56a154be2367ffc4b2"
  },
  {
    "url": "img/guitar/guitar-Em.png",
    "revision": "d16224bea2eb989d1fd39c7f9832d694"
  },
  {
    "url": "img/guitar/guitar-F.png",
    "revision": "f7d4b45cc3b8840001635d03f7234be6"
  },
  {
    "url": "img/guitar/guitar-fanfu.png",
    "revision": "79d4a9ab7a4ea022d1b15847f8fe76a8"
  },
  {
    "url": "img/guitar/guitar-G.png",
    "revision": "c81bd30a3df8dff83b310c097330ef32"
  },
  {
    "url": "img/guitar/guitar-G7.png",
    "revision": "3cc43d4c10a93f0e3baea4f5f7e078c4"
  },
  {
    "url": "img/guitar/guitar-Gm.png",
    "revision": "f9c4f1cd7a89ea80c8af795cbc7b8b09"
  },
  {
    "url": "img/guitar/guitar-sCm.png",
    "revision": "cbb08784c19cb5aa007ff53121b40bb8"
  },
  {
    "url": "img/guitar/guitar-sDm.png",
    "revision": "af4cfb522942c2b7d28034c7682b2494"
  },
  {
    "url": "img/guitar/guitar-sF.png",
    "revision": "1839a76f473e9a98b79ed37e6ca63c89"
  },
  {
    "url": "img/guitar/guitar-sF7.png",
    "revision": "ec62a996a4fd1b17898ce131b2c62e3f"
  },
  {
    "url": "img/guitar/guitar-sFm.png",
    "revision": "2ca1197326cdd13b4d8f4228762aa173"
  },
  {
    "url": "img/guitar/guitar-sGm.png",
    "revision": "b4a64f91ad6698a6f862f9964fa644f9"
  },
  {
    "url": "img/guitar/guitar-yinjie.jpg",
    "revision": "68abfe3c361e5e368f3fa5d2b75c1255"
  },
  {
    "url": "img/guitar/huanlesong.png",
    "revision": "756ae797c402ece42c4ea5045eb19ee3"
  },
  {
    "url": "img/guitar/little-star1.png",
    "revision": "0cdc4d72d596984989606ea6c2484c39"
  },
  {
    "url": "img/guitar/little-star2.jpeg",
    "revision": "5683702396c19bf0b83a4df9df871e35"
  },
  {
    "url": "img/guitar/long-time-ago.jpg",
    "revision": "23fef76de6173b6a3259a341c60d8f96"
  },
  {
    "url": "img/me.jpg",
    "revision": "b23067c1c9ef8d221cd475a77bdba349"
  },
  {
    "url": "img/photography/Boracay-4.jpeg",
    "revision": "48c262a24d824a77f9747cbb432dd9a2"
  },
  {
    "url": "img/photography/Boracay-5.jpeg",
    "revision": "b297c2d1523d1cf8293b1e99374eb05c"
  },
  {
    "url": "img/photography/desert-3.jpg",
    "revision": "fa470c3f45de38c16d616e3078700b18"
  },
  {
    "url": "img/photography/galaxy-1.jpg",
    "revision": "9df44f2b5cab204aadcec93f271f85f2"
  },
  {
    "url": "img/photography/galaxy-3.jpg",
    "revision": "7c1de3d1d17b1456bdbfffeb9a8ffb5b"
  },
  {
    "url": "img/photography/learn-photo-1.jpg",
    "revision": "49940ecc09f34b4500c68c8cf01bcb53"
  },
  {
    "url": "img/photography/learn-photo-10.jpg",
    "revision": "f65ed24320191980f5de4475ad522f60"
  },
  {
    "url": "img/photography/learn-photo-11.jpg",
    "revision": "1eab3f29bb8ddac9894fc97e64f88f06"
  },
  {
    "url": "img/photography/learn-photo-13.jpg",
    "revision": "36978dd863b17ed6ae4eb438a410856b"
  },
  {
    "url": "img/photography/learn-photo-14.jpg",
    "revision": "36e3a4d0ef8ef36400086d3cd92fe668"
  },
  {
    "url": "img/photography/learn-photo-2.jpg",
    "revision": "09b7e5a84f96b03ecda86a1085c6f800"
  },
  {
    "url": "img/photography/learn-photo-23.jpg",
    "revision": "94c60ddcdc57ee7708f60656e289c72e"
  },
  {
    "url": "img/photography/learn-photo-24.jpg",
    "revision": "57608c1ad30395a0c88ea667885e461c"
  },
  {
    "url": "img/photography/learn-photo-25.jpg",
    "revision": "e52b046528a01615d0f80b050d364bd2"
  },
  {
    "url": "img/photography/learn-photo-26.jpg",
    "revision": "1ac04c5d9653417b1e98c856e34d3127"
  },
  {
    "url": "img/photography/learn-photo-27.jpg",
    "revision": "d561e74e389c57c458afc886e79b66c6"
  },
  {
    "url": "img/photography/learn-photo-28.jpg",
    "revision": "659db322bbaced129bbdb82a353ef282"
  },
  {
    "url": "img/photography/learn-photo-29.jpg",
    "revision": "d58500e2bc555e813bd8e7c7ac2ad8b4"
  },
  {
    "url": "img/photography/learn-photo-3.jpg",
    "revision": "f4383bb88e9057a653031317b71ef4ec"
  },
  {
    "url": "img/photography/learn-photo-30.jpg",
    "revision": "bdb7be228665ca5b2b68fb940489abb8"
  },
  {
    "url": "img/photography/learn-photo-31.jpg",
    "revision": "1abf7b436408aa90498dd13026b3fa54"
  },
  {
    "url": "img/photography/learn-photo-4.jpg",
    "revision": "dcb0da7d4b65fd16bad9dac698fd5ae0"
  },
  {
    "url": "img/photography/learn-photo-5.png",
    "revision": "0678eaf7393b347106ec743ae00edb98"
  },
  {
    "url": "img/photography/learn-photo-6.jpg",
    "revision": "25c648da767ed9e6c97de23952514a4d"
  },
  {
    "url": "img/photography/learn-photo-7.jpg",
    "revision": "431bfb50b49f05db7738f5d379e76b84"
  },
  {
    "url": "img/photography/learn-photo-8.jpg",
    "revision": "fab78148326e8c6c73e4a76649c10cc3"
  },
  {
    "url": "img/photography/learn-photo-9.jpg",
    "revision": "1cd8d2f33a80bed8de5ec247e1163a82"
  },
  {
    "url": "img/post/canvas-1.jpg",
    "revision": "c0ddc1feff01031e53651692d5733175"
  },
  {
    "url": "img/post/js-queue.png",
    "revision": "6154e74bca0b44a0089d4283cda8b7a7"
  },
  {
    "url": "img/post/js-queue2.png",
    "revision": "76727bb06cc32215f7d6d5af9d16d38d"
  },
  {
    "url": "img/post/react-lifecycle.png",
    "revision": "e74af4ca46327c1ccbf8abc6ae408a7e"
  },
  {
    "url": "img/post/tcp.png",
    "revision": "03d83583b77ee8bbbefadee34d71f746"
  },
  {
    "url": "img/post/vuepress-blog-2.png",
    "revision": "bb33d629b2ec0f6cd617752a5a99f7f3"
  },
  {
    "url": "img/post/vuepress-blog-3.png",
    "revision": "54f188c4b05a620fa60fef8a55be1785"
  },
  {
    "url": "img/post/web-guide.jpeg",
    "revision": "baf6581825b7b7b87ccfb386a82eab7d"
  },
  {
    "url": "index.html",
    "revision": "4824235505d6e04f12a424901f715257"
  },
  {
    "url": "tag/Axios.html",
    "revision": "5c492f9a131e1e025e1d660478eeb812"
  },
  {
    "url": "tag/Canvas.html",
    "revision": "7854dc70cd5f3623811a2cd82b8710ba"
  },
  {
    "url": "tag/Css.html",
    "revision": "29e99cbddb48d8e66a3086c39944e2b0"
  },
  {
    "url": "tag/Editorconfig.html",
    "revision": "547e8a28c6573642ba4d3169a7fcf1cd"
  },
  {
    "url": "tag/Eslint.html",
    "revision": "3fd4daf5eec4c3bbb8ce0990b724e0d1"
  },
  {
    "url": "tag/Fetch.html",
    "revision": "a10822333d93574d29eeee3809101377"
  },
  {
    "url": "tag/Git.html",
    "revision": "5613dd0bfdb8ef2de33d54b5674a9cc3"
  },
  {
    "url": "tag/Gulp.html",
    "revision": "d1f7251091254fcfbec4f83ee91349c9"
  },
  {
    "url": "tag/index.html",
    "revision": "ed2568b0a3cd313c5e7eb918a7c105c1"
  },
  {
    "url": "tag/Js.html",
    "revision": "234f928b797cd7a9eb2ba63b17bbec13"
  },
  {
    "url": "tag/Mobile.html",
    "revision": "adf79558c22602e38fc2c36f1d4511c4"
  },
  {
    "url": "tag/Moment.html",
    "revision": "73bb59d94b40134c555550283f7ba1cf"
  },
  {
    "url": "tag/node.html",
    "revision": "e40c5f62e01768885215714c02573634"
  },
  {
    "url": "tag/PIXI.html",
    "revision": "20491a92c628a4600833307ab5e1ad4d"
  },
  {
    "url": "tag/React.html",
    "revision": "da50b3080f0ab0d49c3224ea06b736b5"
  },
  {
    "url": "tag/ReactNative.html",
    "revision": "44a012996bd7c2f644c9b94a5a6131de"
  },
  {
    "url": "tag/ssh.html",
    "revision": "3b08deb6f9656ab657c14a038d1e2cc1"
  },
  {
    "url": "tag/Stylelint.html",
    "revision": "2cf4fb1ea94638024cfae6db4f346b28"
  },
  {
    "url": "tag/Vscode.html",
    "revision": "834f590edacfd91a83e7cc966e2f941d"
  },
  {
    "url": "tag/Vuepress.html",
    "revision": "c111b91ac09ac8f3f12af38194c8fa50"
  },
  {
    "url": "tag/吉他.html",
    "revision": "025b8ff9cecca3f18f22dee8d799c5a1"
  },
  {
    "url": "tag/导图.html",
    "revision": "e39eba36accf36a73b6110e18abbeb3c"
  },
  {
    "url": "tag/工具.html",
    "revision": "c753da5c800c9940f84023a6b2b8d44c"
  },
  {
    "url": "tag/摄影.html",
    "revision": "79090e17eb80e5d3e14c44636ba3881a"
  },
  {
    "url": "tag/树洞.html",
    "revision": "517c618e4f533072ddf15c70013a511a"
  },
  {
    "url": "tag/生活.html",
    "revision": "6b70ea9db5d2b9c37386b61e1c5ce8e9"
  },
  {
    "url": "tag/练声.html",
    "revision": "6f391aaedfbfd1f8fd2d1695b9631e9d"
  },
  {
    "url": "tag/英语.html",
    "revision": "6fc1729da1e3f033faafb64bc0776400"
  },
  {
    "url": "tag/规范.html",
    "revision": "ff07a81a5b4db81329b54a21ee25e71c"
  },
  {
    "url": "tag/读书.html",
    "revision": "0fabc3656c6490cf5c2b8f82035e7110"
  },
  {
    "url": "tag/面试.html",
    "revision": "b5cf7e0b999e663d2d40f771b5cd8fdc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
