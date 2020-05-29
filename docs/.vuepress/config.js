const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  title: 'YIXIU',
  theme: resolve('../../src'),
  description: `Yixiu Blog`,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/blog/',
  host: 'localhost',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    dataFormat: 'MMM D, YYYY',

    nav: [
      { link: '/', text: 'Home', icon: 'home', exact: true },
      { link: 'https://github.com/yueyang8389', text: 'Github' }
    ],

    profile: {
      avatar: '/blog/img/me.jpg',
      nickname: '一修',
      bio: '绝云气，负青天，然后图南!',
      location: 'Manila',
      email: 'yueyang8389@gmail.com'
    },

    sns: {
      github: 'https://github.com/yueyang8389',
      zhihu: 'https://www.zhihu.com/people/jiuxia-52/activities',
      cloudmusic: 'https://music.163.com/#/user/home?id=420476488',
      juejin: 'https://juejin.im/user/5c81124ce51d4575d91124b3',
      twitter: 'https://twitter.com/b93rGtnpY6laBgB',
      facebook: 'https://www.facebook.com/hook.chen.9847'
    },

    // comments: {
    //   platform: 'github',
    //   owner: 'yueyang8389',
    //   repo: 'blog',
    //   clientId: '0f4626f3176a519365e0',
    //   clientSecret: 'db6cc00dea72f422b254efb1e4f6fc66707a3466',
    //   autoCreatIssue: process.env.NODE_ENV !== 'development'
    // },

    copyright: {
      author: '一修',
      license: '自由转载-非商用-禁止演绎-保持署名（CC BY-NC-ND 4.0）',
    },

    reward: {
      text: 'Buy me a cup of coffee ☕.',
      methods: {
        wechat: '/img/pay-wechat.png',
        alipay: '/img/pay-zhifubao.png'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
};
