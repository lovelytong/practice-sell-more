<template>
  <div>
    <template v-for="item in menuTree">
      <el-menu-item :index="item.path" v-if="!item.children" :key="item.path">
        {{ item.meta.title }}
      </el-menu-item>
      <el-submenu v-else :key="item.path" :index="item.path">
        <template slot="title">
          <span>{{ item.meta.title }}</span>
        </template>
        <menu-child :menuTree="item.children"></menu-child>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuChild",
  props: ["menuTree"]
};
</script>

<style scoped></style>
