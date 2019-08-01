<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>
      {{ msg }}
    </h2>
    <div v-for="(item, index) in testData" :key="index">
      {{ item }}
    </div>
  </div>
</template>
<script>
import api from "@/service/api";
export default {
  name: "about",
  data() {
    return {
      testData: [],
      msg: "helloWorld"
    };
  },
  async mounted() {
    const res = await this.$http(api.seller);
    this.testData = res.data.infos;
  }
};
</script>
