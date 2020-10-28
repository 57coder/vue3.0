<template>
  <div>
    <h3 :style="{color: themeColor}">provide&inject</h3>
  </div>
</template>
<script>
import { inject} from "vue";

export default {
  setup(){
    // 调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const themeColor = inject('color')
    return {
      themeColor
    }
  }
};
</script>
