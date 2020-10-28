<template>
  <div>
    {{count}}---{{num}}
  </div>
</template>
<script>
import { watch, reactive, ref, onBeforeMount } from 'vue';

export default {
  setup() {
    const count = ref(0)
    // watch 会在创建时会自动调用一次

    // 基本类型
    watch(() => console.log(count.value,'--watch--'))
    setTimeout(() => {
      count.value++
    }, 1000)
    // on
    // 监视 ref 类型的数据源：
    const num = ref(0)
    setTimeout(() => {
      num.value++
    }, 1000)
    // 指定要监视的数据源
    watch(num, (value, oldValue) => { console.log(value, oldValue, 'value oldValue')})

    // 监视 reactive 类型的数据源：
    const state  = reactive({name:'zs'});
    setTimeout(() => {
      state.name = 'lisi'
    }, 1000)
    watch(() => state.name, (value, oldValue) => {console.log(value, oldValue)})

    // 监视多个数据源
    const person = reactive({ age: 3, name: 'zs' })
    setTimeout(() => {
      person.age = 4
      person.name = 'lisi'
    }, 1000);
    watch(
      [() => person.age, () => person.name],    // Object.values(toRefs(person)),
      ([age, name], [prevAge, prevName]) => {
        console.log(age)         // 新的 age 值
        console.log(name)          // 新的 name 值
        console.log('------------')
        console.log(prevAge)     // 旧的 age 值
        console.log(prevName)      // 新的 name 值
      },
      {
        lazy: true // 在 watch 被创建的时候，不执行回调函数中的代码
      }
    )

    // 清除监视 
    const stop = watch(() =>{})
    return {
      count,
      num,
      person
    }
  }
}
</script>
