<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="micro-viewport"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>
