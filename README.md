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