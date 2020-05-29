---
title: react-redux的使用
date: 2019-09-06
tags:
  - React
category: 前端
banner: /blog/img/banner/33.jpg
---

## store
创建store，并添加中间件

**store/index.js**
```js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunkMiddleware));
```

store的职责：
1. 维持应用的 state
2. 提供 getState() 方法获取 state
3. 提供 dispatch(action) 方法更新 state
4. 通过 subscribe(listener) 注册监听器
5. 通过 subscribe(listener) 返回的函数注销监听器

参考：
- [createStore()](https://cn.redux.js.org/docs/api/createStore.html)
- [Store](https://cn.redux.js.org/docs/basics/Store.html)

## reducer
描述应用如何更新 state

**store/reducer.js**
```js
import * as types from 'types';

const defaultState = {
  count: 0,
  loading: false,
  postData: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD:
      return state.count + action.payload;

    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case types.SET_POST_DATA:
      return {
        ...state,
        postData: action.payload
      }

    default:
      return state;
  }
};
```

## action
1. actions 只是描述了有事情发生，改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store，
action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作

2. action 创建函数就是生成 action 的方法

**store/types.js**
```js
/*
 * action 类型
 */

export const ADD = 'ADD_TODO';

export const SET_LOADING = 'SET_LOADING';

export const SET_POST_DATA = 'SET_POST_DATA';

```

**store/action.js**
```js
import * as types from 'types';

/*
 * action 创建函数
 */

export const add = (num) => {
  return { type: types.ADD, payload: num }
}

export const setLoading = (bool) => {
  return { type: types.SET_LOADING, payload: bool }
}

// 异步操作
export const setPostData = (data) => {
  return { type: types.SET_POST_DATA, payload: data }
}

export const fetchPost = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(json => {
        dispatch(setPostData(json))
      })
  }
}
```

## Provider
你的根组件应该嵌套在 `<Provider>` 中才能使用 connect() 方法

**src/index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## connect

连接 React 组件与 Redux store。连接操作不会改变原来的组件类。而是返回一个新的已与 Redux store 连接的组件类。

#### mapStateToProps(state, ownProps)
将 mapStateToProps 和 mapDispatchToProps 传入 connect 函数中与视图建立联系。

mapStateToProps 将 state 映射到组件 props 中 ，定义该参数，组件将会监听 Redux store 的变化，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象。

如果传入第二个参数 ownProps ，那么当 prop 发生变化的时候， mapStateToProps 也会被调用。
```js
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
```

#### mapDispatchToProps([dispatch, ownProps] | [object])
mapDispatchToProps 将 dispatch 映射到组件 props 中，可以为函数可以为对象。

如果mapDispatchToProps是一个函数，它可以传入dispatch,ownProps, 定义UI组件如何发出action，实际上就是要调用dispatch这个方法。

**MyComponent.js**
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, fetchPost } from './store/actions'

class MyComponent extends Component {

  componentDidMount() {
    const { getPost } = this.props
    getPost();
  }

  handleClick = () => {
    const { counter } = this.props
    counter(2);
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.handleClick}>点击</button>
        {
          postData.map(post => (
            <p key={post.id}>{post.title}</p>
          ))
        }
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      count: state.count,
      postData: state.postData
    }
  },
  {
    counter: add,
    getPost: fetchPost
  })(MyComponent);
```

## 参考链接
- [阮一峰-redux入门教程123](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
- [react-redux中文文档gitbook](https://cn.redux.js.org/docs/react-redux/api.html)
- [redux中文文档gitbook](https://cn.redux.js.org/docs/basics/)
- [mapStateToProps，mapDispatchToProps的使用详解](https://blog.csdn.net/suwu150/article/details/79415085)
- [react-redux一点就透，我这么笨都懂了！](https://juejin.im/post/5af00705f265da0ba60fb844)

