<template>
  <h1>这是一个异步组件</h1>
</template>

<script>
const sleep = time => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
};

export default {
  name: "AsyncComponent",
  async setup() {
    // ... some code 将初始化页面需要的数据放在此处，
    await sleep(3000); //模拟数据请求
  }
};
</script>
