<template>
  <div>
    <h5>TemplateRefTwo --- {{count}}</h5>
    <button @click="count+=1">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}
</script>