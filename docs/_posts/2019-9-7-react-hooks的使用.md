---
title: react-hooks的使用
date: 2019-09-07
tags:
  - React
category: 前端
banner: /blog/img/banner/35.jpg
---

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
<!-- more -->

## useState
useState 允许您将React状态添加到函数式组件   

> const [value, setValue] = useState(defaultValue) 

```js
import React, { useState, useEffect } from 'react'

function Hooks(props) {
  const [text, setText] = useState('关闭');

  const toggleText = () => {
    text === '关闭' ? setText('打开') : setText('关闭');
  }
  
  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleText}>改变文字</button>
    </div>
  )
}

export default Hooks;
```

## useEffect

用来代替 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 

> useEffect(() => {
  doSomething()
}, [dependencies])

```js
import React, { useState, useEffect } from 'react'

function Hooks(props) {
  const [text, setText] = useState('关闭');
  let [count, setCount] = useState(0);

  const toggleText = () => {
    text === '关闭' ? setText('打开') : setText('关闭');
  }

  /**
   * 类似于componentDidMount, componentDidUpdate的用法
   */
  useEffect(() => {
    console.log("状态改变就触发");
  });

  /**
   *  useEffect接收了第二个参数
   */
  useEffect(() => {
    console.log("只在count变化才触发");
  }, [count]);

  /**
   * 带返回值类似componentUnMount的用法
   */
  useEffect(() => {
    const interval = setInterval(() => {
      increase();
    }, 1000);

    return () => clearInterval(interval);

    // return () => {
    //   console.log('组件卸载时调用')
    // }
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(++count)}>+1</button>
      <button onClick={() => setCount(--count)}>-1</button>
      <p>{text}</p>
      <button onClick={toggleText}>改变文字</button>
    </div>
  )
}

export default Hooks;
```

## useRef

获取真实DOM

> const refContainer = useRef(); 

```js
import React, { useState, useRef, Fragment, useEffect } from 'react';

function Demo({ count: propsCount = 1 }) {
  const [count, setCount] = useState(propsCount);
  const refContainer = useRef(); // 如同之前的 React.createRef();

  useEffect(() => {
    console.log(refContainer.current, '>>>>>>>>>>>');
  });

  return (
      <Fragment>
        <button onClick={() => { setCount(count + 1); }}>Click Me</button>
        <p ref={refContainer}>You click {count} times</p>
      </Fragment>
  );
}

export default Demo;
```

## useReducer
用来管理组件本地的复杂 state

> const [state, dispatch] = useReducer(reducer, initialState);

```js
import React, { useReducer, useEffect } from "react";

function Demo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => {
        dispatch({
          type: 'step',
          step: Number(e.target.value)
        });
      }} />
    </>
  );
}

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === 'tick') {
    return { count: count + step, step };
  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}

export default Demo;
```

## useImperativeHandle 
用于在函数式组件中，获取子组件的ref

```js
// 子组件
import React, { useRef, useImperativeHandle, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}

export default forwardRef(FancyInput);

// 父组件
import React, { useRef } from "react";

function App(){
  const fancyInputRef = useRef(null)
  // 这样获取子组件方法
  fancyInputRef.current.focus()
  return (
    <div> 
      <FancyInput ref={fancyInputRef} /> 
    </div>
  )

}
```

## useContext

```js
// theme.js
import React from 'react'

export const ThemeContext = React.createContext();

export const Theme = (props) => {
  return(
    <ThemeContext.Provider value="red">
      {props.children}
    </ThemeContext.Provider>
  )
}

// bar.js
import React from 'react'
import { ThemeContext } from 'theme'

function Bar() {
  const color = useContext(ThemeContext);
  return <div>{color}</div>;
}

// App.js
import React from 'react'
import { ThemeContext, Theme } from 'theme'

function Foo() {
  return <Bar />;
}

function App() {
  return (
    <Theme>
      <Foo />
    </Theme>
  );
}

export default App;
```

## useMemo
在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行，返回缓存的变量，解决不必要的渲染的问题

> useMemo(() => {
  doSomething()
}, [dependencies])  
> const result = useMemo(fnB, [a])


```js
import React, { useState, useMemo } from 'react'

function Memo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  const compute = () => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }

  // without useMemo
  // const result = compute();
  
  // with useMemo
  const result = useMemo(() => compute(), [count]);

  return <div>
    <h4>{count}-{result}</h4>
    {val}
    <div>
      <button onClick={() => setCount(count + 1)}>+c1</button>
      <input value={val} onChange={event => setValue(event.target.value)} />
    </div>
  </div>;
}

export default Memo;
```
## useCallback
在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行，返回缓存的函数，解决不必要的渲染的问题

> useCallback(() => {
  doSomething()
}, [dependencies])  
> const fnA = useCallback(fnB, [a])

## 自定义hook
Hook 函数必须以 “use” 命名开头

```js
import React, { useState, useCallback, useEffect } from 'react'

function useResize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])
  return size
}

export default useResize

```

## 参考链接
- [实战项目后对 React Hooks 总结](https://mp.weixin.qq.com/s/k8R0PkMflumIS9CKSKgblg)
- [快速上手三大基础 React Hooks](https://juejin.im/post/5c8918ca6fb9a049f572023e)
- [十个案例学会 React Hooks](https://github.com/happylindz/blog/issues/19)
- [useMemo与useCallback使用指南](https://zhuanlan.zhihu.com/p/66166173)
- [React Hooks 第一期：聊聊 useCallback](https://zhuanlan.zhihu.com/p/56975681)
- [React Hooks：useCallback和useMemo](https://blog.hackages.io/react-hooks-usecallback-and-usememo-8d5bb2b67231)
