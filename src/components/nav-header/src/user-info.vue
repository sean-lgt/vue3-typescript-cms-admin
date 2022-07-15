<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-item icon="CircleClose" @click="handleExitClick">
          退出登录
        </el-dropdown-item>
        <!-- divided 显示分隔符 -->
        <el-dropdown-item divided>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import localCache from '@/utils/cache'

import { ElMessageBox } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name) //获取登录姓名

    const router = useRouter()
    // 点击退出登录
    const handleExitClick = () => {
      ElMessageBox.confirm('您确认退出当前登录吗?', '提醒', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localCache.deleteCache('token') //删除缓存中的token
        router.push('/main')
      })
    }

    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
