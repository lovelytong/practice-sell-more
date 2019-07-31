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
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
      testData: [],
      msg: "helloWorld"
    };
  },
  mounted() {
    axios
      .get("api/seller")
      .then(res => {
        this.testData = res.data.infos;
      })
      .catch(error => {
        alert(error.message);
      });
  }
};
</script>
