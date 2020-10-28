<template>
  <div>
    <slot :count="count" :increment='increment'></slot>
  </div>
</template>
<script>
export default {
  data(){
    return {
      count: 1
    }
  },
  methods: {
    increment (count) {
      this.count++
    }
  }
}
</script>
<style>
  
</style>