<template>
  <div>
    {{count}}
    {{count1}}
  </div>
</template>
<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    /* ----------------------创建只读的计算属性------------------------ */
    const count = ref(1)

    // 根据 count 的值，创建一个响应式的计算属性 plusOne
    // 它会根据依赖的 ref 自动计算并返回一个新的 ref
    const plusOne = computed(() => count.value + 1)

    console.log(plusOne.value, 'plusOne.value') // 输出 2
    plusOne.value++ // error
    

    /* ----------------------创建可读可写的计算属性------------------------ */
    const count1 = ref(1)

    const addOne = computed({
      get: () => count1.value + 1,
      set: val => {
        count1.value = val - 1
      }
    })

    // 为计算属性赋值的操作，会触发 set 函数
    addOne.value = 9
    // 触发 set 函数后，count 的值会被更新
    console.log(count1.value) // 输出 8
    return {
      count,
      count1
    }
  }
}
</script>
