<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>
      {{ msg }}
    </h2>
    <div v-for="(item, index) in testData" :key="index">
      {{ item }}
    </div>
    <authorized :authority="['admin']">
      <el-button type="primary">123</el-button>
    </authorized>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "about",
  data() {
    return {
      testData: [],
      msg: "helloWorld seller"
    };
  },
  computed: {
    ...mapGetters({ seller: "seller/getSeller" })
  },
  mounted() {
    setTimeout(() => {
      this.testData = this.seller.infos;
    }, 1000);
  }
};
</script>
