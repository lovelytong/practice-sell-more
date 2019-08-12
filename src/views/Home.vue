<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span class="icon iconfont icon-tongji"></span>
    <span class="icon iconfont icon-aixin"></span>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
