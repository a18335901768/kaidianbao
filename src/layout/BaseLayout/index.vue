<template>
  <el-container class='base-layout'>
    <header-bar />
    <el-container>
      <menu-aside />
      <el-main class='content'>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import MenuAside from "./components/MenuAside.vue";
export default {
  components: { HeaderBar, MenuAside },
  name: "base-layout",
};
</script>

<style lang='scss' scoped>
.base-layout {
    @include wh (100vw, 100vh);
    overflow: hidden;
    .content {
        background: #f7f7f7;
    }
}
</style>