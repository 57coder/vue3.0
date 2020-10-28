<template>
  <div>
    <button @click="loadAsyncComponent">点击加载异步组件</button>
    <Suspense v-if="loadAsync">
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
      <template #fallback>
        <div class="loading"></div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import AsyncComponent from '../utils/AsyncComponent.vue'
export default {
  name: "App",
  data() {
    return {
      loadAsync: false
    };
  },
  components: {
    AsyncComponent
  },
  methods: {
    loadAsyncComponent() {
      this.loadAsync = true;
    }
  }
};
</script>

<style scoped>
#app {
  width: 800px;
  height: 600px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.loading {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  background-image: url("../assets/images/loading.png");
  background-size: 100%;
}
</style>
