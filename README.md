# 1、Composition API（Vue3新语法初探究）

  使用 Composition API 有几个亮点：
  
### 功能分割
  - 整个函数就是一个功能
  - 函数包含创建 <font color=red>新文件夹</font> 所依赖的数据和逻辑
  - 函数完全独立，功能可以复用

### 逻辑复用
    https://vue-composition-api-rfc.netlify.app/zh/#%E9%80%BB%E8%BE%91%E6%8F%90%E5%8F%96%E4%B8%8E%E5%A4%8D%E7%94%A8
  
##  setup

  setup() 函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 Composition API 新特性提供了统一的入口。

##### 执行时机
    setup 函数会在 beforeCreate 之后、created 之前执行。
#### 接收 props 数据
    通过 setup 函数的第一个形参，接收 props 数据：
  ```sh
  setup(props) {
      console.log(props.p1)
  }
  ```
####  context

    setup 函数的第二个形参是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到，在 vue 3.x 中，它们的访问方式如下:

  ```js
  const MyComponent = {
    setup(props, context) {
      context.attrs
      context.slots
      context.parent
      context.root
      context.emit
      context.refs
    }
  }
  ```
  **在 setup() 函数中无法访问到 this**
# 2、Multiple root elements

  在 Vue 2 中，tempalte 只能取一个根元素。即使我们只有两个 <p> 标记，我们也必须将它们包含在一个 <div> 标记中，为了能编译通过，我们通常会增加一个根节点。

  <br>
  在 Vue 3 中取消了这一限制：
  可以直接在<template></template>中使用任意数量的标签

### 带来的问题

  - 不必要的代码嵌套和缩进。

# 3、Suspense

  Suspense 是一个 Vue 3 新特性。类似于 keep-alive 不需要任何的引入，可以直接进行使用。自带两个 slot 分别为 default、fallback。

### 使用场景

  - 有时候，子组件的数据加载完成之前都需要显示 loading 效果。我们可以在vue3 中的 Composition API 中的 setup 做一波操作。

  - 配合路由使用,当未加载完毕时不显示 router-view，而是渲染 fallback的 内容，全局增加 loading 的处理

# 4、Multiple v-models

  Vue 2 只允许在一个组件上使用一个 v-models。在 Vue 3 中，我们可以将任意数量的 v-model 绑定到我们的定制组件上

# 5、Reactivity
  Vue 2 的响应式在少数情况下会存在一些问题：

    1. 对于对象，Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的。

    2. 对于数组，利用索引直接设置一个数组项时或者是修改数组的长度时是不能检测数组的变动的。
    
  ```js
  var vm = new Vue({
    data: {
      items: ['a', 'b', 'c']
    }
  })
  vm.items[1] = 'x' // 不是响应式的
  vm.items.length = 2 // 不是响应性的
```
  在 vue 3 中，我们不需要借助其他 API
  ```js
  export default {
    setup() {
      let list = ref([1, 2]);
      let myObj = ref({ name: "partty" });
      function myFun() {
        list.value[3] = 3;
        myObj.value.last = "lisi";
        delete myObj.value.name;
      }
      return { myFun, list, myObj };
    },
  };

  ```
### 基本语法
###  定义响应式数据供 template 使用
# 6、 ref
### 1. 基本语法
	ref() 函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个 .value 属性：
### 2. 在 template 中访问 ref 创建的响应式数据
### 3. 在 reactive 对象中访问 ref 创建的响应式数据
 	当把 ref() 创建出来的响应式数据对象，挂载到 reactive() 上时，会自动把响应式数据对象展开为原始的值，不需通过 .value 就可以直接被访问。
### 4. isRef
	isRef() 用来判断某个值是否为 ref() 创建出来的对象；应用场景：当需要展开某个可能为 ref() 创建出来的值的时候
### 5.  toRefs
 	toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据

#  7、computed
#### 1. 创建只读的计算属性
	在调用 computed() 函数期间，传入一个 function 函数，可以得到一个只读的计算属性
#### 2. 创建可读可写的计算属性
	在调用 computed() 函数期间，传入一个包含 get 和 set 函数的对象，可以得到一个可读可写的计算属性
```js
// 创建一个 ref 响应式数据
const count = ref(1)

// 创建一个 computed 计算属性
const plusOne = computed({
  // 取值函数
  get: () => count.value + 1,
  // 赋值函数
  set: val => {
    count.value = val - 1
  }
})

// 为计算属性赋值的操作，会触发 set 函数
plusOne.value = 9
// 触发 set 函数后，count 的值会被更新
console.log(count.value) // 输出 8
```
# 8、watch
#### 1. 基本用法
```js
const count = ref(0)
// 定义 watch，只要 count 值变化，就会触发 watch 回调
// watch 会在创建时会自动调用一次
watch(() => console.log(count.value))
// 输出 0
	
setTimeout(() => {
  count.value++
  // 输出 1
}, 1000)
```
#### 2. 监视指定的数据源
  监视 reactive 类型的数据源
  
  监视 ref 类型的数据源
  
#### 3. 监视多个数据源
监视 reactive 类型的数据源

监视 ref 类型的数据源

#### 4. 清除监视
	在 setup() 函数内创建的 watch 监视，会在当前组件被销毁的时候自动停止。如果想要明确地停止某个监视，可以调用 watch() 函数的返回值即可，语法如下：
```js
// 创建监视，并得到 停止函数
const stop = watch(() => {
  /* ... */
})

// 调用停止函数，清除对应的监视
stop()
```
# 9、LifeCycle Hooks
新版的生命周期函数，可以按需导入到组件中，且只能在 setup() 函数中使用。
	下面的列表，是 vue 2.x 的生命周期函数与新版 Composition API 之间的映射关系
	
![](./WechatIMG48.png)

# 10、provide & inject
	provide() 和 inject() 可以实现嵌套组件之间的数据传递。这两个函数只能在 setup() 函数中使用。父级组件中使用 provide() 函数向下传递数据；子级组件中使用 inject() 获取上层传递过来的数据。
#### 1. 共享普通数据
#### 2.  共享 ref 响应式数据

# 11、template refs
	通过 ref() 还可以引用页面上的元素或组件。
#### 1. 元素的引用

#### 2. 组件的引用
# 11、App configration

  	在 Vue 2 中，如果想使用 use(), mixin() , directive() 等方法需要配合全局 Vue 对象:

```js
import Vue from "vue";
import App from "./App";

Vue.use(/* ... */);
Vue.mixin(/* ... */);
Vue.component(/* ... */);
Vue.directive(/* ... */);

new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App,
  },
});
```
  在 Vue 3 中， 改成了 createApp 返回的 Vue 实例

# 12、Transition

  现在 Vue 3 从命名上更加直观: v-enter 变成了 v-enter-from，v-leave 变成 v-leave-from。
