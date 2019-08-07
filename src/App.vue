<template>
  <div id="app">
    <el-row class="tac" style="height: 100%;">
      <el-col :span="4" style="text-align: left;height: 100%;">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <menu-child :menuTree="menuData"></menu-child>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import menuChild from "@/components/MenuChild";
export default {
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuData
    };
  },
  components: {
    menuChild
  },
  mounted() {
    console.log(">>>>>>>", process.env.NODE_ENV);
    this.getSeller();
  },
  methods: {
    ...mapActions({ getSeller: "seller/getSeller" }),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getMenuData(routes) {
      const menuData = [];
      routes.forEach(item => {
        if (item.name) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children) {
            newItem.children = this.getMenuData(item.children);
          }
          menuData.push(newItem);
        }
      });
      return menuData;
    }
  }
};
</script>

<style lang="scss">
html body {
  height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  padding: 0;
  margin: 0;
}
</style>
