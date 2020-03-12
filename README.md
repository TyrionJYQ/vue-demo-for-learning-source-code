# vue源码学习

### demo安装

这是为了学习vue源码而搭建的demo，基于webpack4.在webpack.config.js文件中的reslove选项，通过alias中的vue属性值，可以选择不同的vue版本进行调试。



- clone this repo
- cd root dir and run `npm install`
- `npm start`

### 源码学习文章

[vue源码分析（一）初探vue](https://blog.csdn.net/TyrionJ/article/details/104384077) 

[vue源码分析（二）vue运行时版本和带编译的版本区别](https://blog.csdn.net/TyrionJ/article/details/104393552)

[vue源码分析(三) new Vue背后的故事](https://blog.csdn.net/TyrionJ/article/details/104398902)

[vue源码分析(四) 深入源码了解Vue实例的挂载](https://blog.csdn.net/TyrionJ/article/details/104401882)



### Vue构造函数

思维导图对应 `Vue构造函数.xmind`

在`src/core/instance/index.js`中，定义了`Vue`构造函数，并调用了多个`mixin`方法对构造函数的`prototype`对象进行拓展，因此当我们实例化构造函数获取到`vm`实例时，`vm`实例会有以下继承自原型上的属性

- _init
- $data
- $props
- $watch
- $on
- $once
- $off
- $emit
- _update
- $forceUpdate
- $destroy
- $nextTick
- _render



> 在实例化`Vue`构造函数时，会调用`_init`方法对实例进行初始化，完成数据渲染到视图这一过程。



### Vue初始化

#### 初始化data,methods,props等

在实例化`Vue`时，会调用`Vue.prototype._init(options)`方法初始化，在`init`方法中，会执行`initProps,initMethods,initData`对`options`中的`props,methods,data` 进行初始化，可以看到`data`在`props`和`methods` 后初始化，因此在初始化`data` 的过程中，会对`data` 中的属性进行属性重名校验，

在`initProps,initMethods,initData` 中会将调用 `proxy`  将`prop,methods,data` 中的属性代理到vm实例上，这里`vue` 帮我们作了`this`绑定，这也就是为什么我们在`methods`的方法中通过`this.msg` 能拿到`props`或`data` 中定义的`msg`



#### $mount方法

在`_init` 方法中会对`options` 中是否有`el` 属性进行判断，如果有`el` 就调用`Vue.prototype.$mount` 方法进行挂载。

在带`compile` 的`vue` 版本，会根据`el` 调用`query` 方法

```
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}
```

> 可以看到el可以是字符串，如果是字符串，并且根据传入的字符串查找不到真实的dom，开发环境会报警告，并创建返回一个div，如果不是字符串，就直接返回el

#### 关于带编译版本和不带编译版本

这里有一个关于`vue` 性能优化的点，也就是我们尽可能使用`runtime` 版本的vue,也就是不带编译功能的`vue` 版本，因为文件更小，加载更快。

关于`template`

关于编译版本的`template`

`template` 可以是一个字符串

>  以`#` 开头的字符串，会调用`idToTemplate`  方法取对应的id选择器的`innerHtml`

`template` 可以是一个`Dom` 元素

> 取`innerHtml`

`template`不存在且有`el`

> 取`el` 所对应的`Dom` 元素的`outerHTML`



所以带编译版本，首先是获取`template` 然后根据`template` 编译生成相关`render` 函数



```javascript
 const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
```

 在`mountComponent` 方法中会对是否有`render` 函数进行校验，如果没有`render` 函数，满足一定的条件会抛出警告。

在`mountComponent` 方法中或调用`_render` 方法生`vnode` 

参考[vue源码分析(四) 深入源码了解Vue实例的挂载](https://blog.csdn.net/TyrionJ/article/details/104401882)



#### createElement

![avator](https://github.com/TyrionJYQ/vue-demo-for-learning-source-code/blob/master/flowcharts/createElement.svg)