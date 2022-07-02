<template>
  <div id="app">
    <!-- <h2>{{ $store.state.name }}</h2> -->
    <router-link to="/">login</router-link> |
    <router-link to="/main">main</router-link>
    <!-- <el-button>测试全局引入elementPlus</el-button> -->
    <!-- <el-button type="primary">测试全局引入elementPlus</el-button> -->
    <!-- 测试局部注册 elementPlus -->
    <el-button>局部注册</el-button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    ElButton
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
