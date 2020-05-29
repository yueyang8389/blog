---
title: react-lifecycle的使用
date: 2019-09-08
tags:
  - React
category: 前端
banner: /blog/img/banner/36.jpg
---

## 生命周期图
![image](/blog/img/post/react-lifecycle.png) 

参考：[生命周期图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 挂载阶段
组件的初始化阶段，就是将我们的组件插入到DOM中，只会发生一次  

- constructor
- getDerivedStateFromProps
- ~~componentWillMount/UNSAVE_componentWillMount~~
- render
- componentDidMount

### constructor
如果显示定义了 constructor 构造函数，我们就必须在构造函数第一行执行 super(props) ，否则我们无法在构造函数里拿到 this 
1. 初始化state
2. 给自定义方法绑定this

```js
constructor(props) {
    super(props)
    
    this.state = {
      count: 1,
    }

    this.handleChange = this.handleChange1.bind(this)
}
```

> 禁止在构造函数中调用setState

### getDerivedStateFromProps

`static getDerivedStateFromProps(props, state)`  

React 16.3 的版本中 getDerivedStateFromProps 的触发范围是和 16.4^ 是不同的，主要区别是在 setState 和 forceUpdate 时会不会触发 

getDerivedStateFromProps 的作用就是为了让 props 能更新到组件内部 state 中

它应返回一个对象来更新 state，如果返回 null 则不更新任何内容  

这个方法就是为了取代之前的componentWillMount、componentWillReceiveProps和componentWillUpdate

当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps

使用场景：
1. 无条件的根据 prop 来更新内部 state，也就是只要有传入 prop 值， 就更新 state
2. 只有 prop 值和 state 值不同时才更新 state 值

```js
class ColorPicker extends React.Component {
  state = {
    color: '#000000',
    prevPropColor: ''
  }
  static getDerivedStateFromProps (props, state) {
    // 设置一个单独的变量保存之前的props，解决16.4版本后更新state，一直为之前props的bug
    if (props.color !== state.prevPropColor) {
      return {
        color: props.color
        prevPropColor: props.color
      }
    }
    return null
  }
  ... // 选择颜色方法
  render () {
    .... // 显示颜色和选择颜色操作
  }
}
```

注意：
1. 因为这个生命周期是静态方法，同时要保持它是纯函数，不要产生副作用。
2. 在使用此生命周期时，要注意把传入的 prop 值和之前传入的 prop 进行比较。

### render
React中最核心的方法，一个组件中必须要有这个方法

返回的类型有以下几种：

1. 原生的DOM，如div
2. React组件
3. Fragment（片段）
4. Portals（插槽）
5. 字符串和数字，被渲染成text节点
6. Boolean和null，不会渲染任何东西


### componentDidMount
组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅

在componentDidMount中调用setState会触发一次额外的渲染，多调用了一次render函数，但是用户对此没有感知，因为它是在浏览器刷新屏幕前执行的。


## 更新阶段

更新阶段，当组件的props改变了，或组件内部调用了setState或者forceUpdate发生，会发生多次

- ~~componentWillReceiveProps/UNSAFE_componentWillReceiveProps~~
- getDerivedStateFromProps
- shouldComponentUpdate
- ~~componentWillUpdate/UNSAFE_componentWillUpdate~~
- render
- getSnapshotBeforeUpdate
- componentDidUpdate 


### shouldComponentUpdate
`shouldComponentUpdate(nextProps, nextState)`

有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true

注意当我们调用forceUpdate并不会触发此方法

因为默认是返回true，也就是只要接收到新的属性和调用了setState都会触发重新的渲染，这会带来一定的性能问题，所以我们需要将this.props与nextProps以及this.state与nextState进行比较来决定是否返回false，来减少重新渲染

但是官方提倡我们使用PureComponent来减少重新渲染的次数而不是手工编写shouldComponentUpdate代码，具体该怎么选择，全凭开发者自己选择

### getSnapshotBeforeUpdate
`getSnapshotBeforeUpdate(prevProps, prevState)`

获取render之前的dom状态

这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，请返回null，不写的话控制台会有警告

还有这个方法一定要和componentDidUpdate一起使用，否则控制台也会有警告

这个方法时用来代替componentWillUpdate/UNSAVE_componentWillUpdate

```js
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

### componentDidUpdate
该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的

在这个函数里我们可以操作DOM，和发起服务器请求，还可以setState，但是注意一定要用if语句控制，否则会导致无限循环

## 卸载阶段
卸载阶段，当我们的组件被卸载或者销毁了

- componentWillUnmount

当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作

注意不要在这个函数里去调用setState，因为组件不会重新渲染了

## setState
可以调用setState的生命周期函数
1. componentWillMount()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillReceiveProps(nextProps)

| 是否可以执行setState |                    生命周期函数                     |
| :------------------: | :-------------------------------------------------: |
|       可以执行       |              componentWillReceiveProps              |
|       尽量避免       | constructor、componentDidMount、 componentDidUpdate |
|        无意义        |      componentWillMount、componentWillUnMount       |
|         禁止         |     shouldComponentUpdate、 componentWillUpdate     |


## 参考链接
- [react 官网](https://zh-hans.reactjs.org/docs/react-component.html)
- [【React深入】setState的执行机制](https://juejin.im/post/5c71050ef265da2db27938b5)
- [React 生命周期](https://bixuwen.com/post/5cdd6c405188257cf051a235)
- [为何要在componentDidMount里面发送请求？](https://juejin.im/post/5c70e67f6fb9a049ba42326b)
- [React组件的DidMount事件里的setState事件](https://juejin.im/post/5a575c72518825734f52a049)
- [React Component 生命周期](https://github.com/superman66/front-end-blog/issues/2)
- [我对 React v16.4 生命周期的理解](https://juejin.im/post/5b6f1800f265da282d45a79a)
- [React 中 getDerivedStateFromProps 的用法和反模式](https://juejin.im/post/5c3ad49be51d45521053fde0)

