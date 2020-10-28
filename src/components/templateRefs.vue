<template>
  <div>
    <h3 ref="h3Ref">TemplateRef</h3>

    <!-- 组件引用 -->
    <!-- 点击按钮展示子组件的 count 值 -->
    <button @click="showNumber">获取count值</button>
    <template-refs ref="comRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import templateRefs from '../utils/templateRefs.vue' 
export default {
  components: {
    templateRefs
  },
  setup() {
    // 创建一个 DOM 引用
    const h3Ref = ref(null)
    // 元素的引用
    // 在 DOM 首次加载完毕之后，才能获取到元素的引用
    onMounted(() => {
      // 为 dom 元素设置字体颜色
      // h3Ref.value 是原生DOM对象
      h3Ref.value.style.color = 'red'
    })


    // 创建一个组件的 ref 引用
    const comRef = ref(null)
    // 展示子组件中 count 的值
    const showNumber = () => {
      console.log(comRef.value.count)
    }
    
    return {
      h3Ref,
      comRef,
      showNumber
    }
  }
}
</script>