---
title: react-router的使用
date: 2019-09-20
tags:
  - React
category: 前端
banner: /blog/img/banner/42.jpg
---

## 基本使用
```js
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Photo from './pages/photo';
import Guitar from './pages/guitar';
import NotFundPage from './pages/NotFund';

function App() {

  return (
    <BrowserRouter>
      <Link to="/">博客首页</Link>
      <Link to="/photo">摄影</Link>
      <Link to="/guitar">吉他</Link>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/photo" component={Photo}></Route>
        <Route path="/guitar" component={Guitar}></Route>
        <Route path="*" component={NotFundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
```

## Route

#### component: React component
最常使用的，全局路由配置，接收一个`React component`

#### render: func
用于渲染内联组件，不会产生重复装载问题

#### children: func
无论路径是否匹配都有可以渲染的内容

#### 总结
三种方式都会接收`history`, `location`, `match`三个`props`

## 编程式路由跳转

```js
this.props.history.push(path);
```

## 路由传参数

#### match.params
```js
<Route path="/component/:id" component={Component} />

<Link to="/component/10">toComponent</Link>

props.match.params.id // id == 10
```

#### search & query & state
```js
const obj = {
  pathname: '/component',
  search: '?sort=name',
  query: { id: 123 },
  state: { name: 456 }
}

// 第一种
props.history.push(obj)

// 第二种
<Link to={obj}>Zillow Group</Link>

// 获取
// search参数
const params = new URLSearchParams(props.location.search);
const value = params.get('sort'));

// query参数
props.location.query.id

// state参数
props.location.state.name

```

#### 注意：
1. query 和 state 在页面刷新后会消失
2. query 和 state 都是隐式传递

## withRouter
作为路由组件，可以直接获取`history`、`location`、`match`三个props，但是非路由组件就得通过`withRouter`才能得到这些属性
```js
<Route path='/' component={App}/>
```
App组件就可以直接获取路由中这些属性了，但是如果App组件中如果有一个子组件Foo，那么Foo就不能直接获取路由中的属性了，必须通过withRouter修饰后才能获取到。

## 参考链接
- [react-router-dom 路由传参](https://www.jianshu.com/p/78286fb4bb6b)
- [React Router 4.x 开发，这些雷区我们都帮你踩过了](https://juejin.im/entry/5b50518bf265da0f6436c34a)
- [关于 React Router4，你所需要知道的一切](https://zhuanlan.zhihu.com/p/43581520)
- [React Router DOM 中文文档（一）](https://www.jianshu.com/p/97e4af32811a)
- [React Router DOM 中文文档（二）](https://www.jianshu.com/p/5796c360e776)
- [withRouter有什么用，为什么没有withRouter的组件也一样使用](https://segmentfault.com/q/1010000015964411)
