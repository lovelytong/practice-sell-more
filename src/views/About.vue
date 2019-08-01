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
import { mapGetters } from "vuex";
export default {
  name: "about",
  data() {
    return {
      testData: [],
      msg: "helloWorld"
    };
  },
  computed: {
    ...mapGetters({ seller: "seller/seller" })
  },
  mounted() {
    this.testData = this.seller.infos;
  }
};
</script>
