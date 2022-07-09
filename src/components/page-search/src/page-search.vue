<template>
  <div class="page-search">
    <!-- 绑定属性 v-model双向数据绑定 -->
    <custom-form v-bind="searchFormConfig" v-model="formData">
      <!-- 提供插槽 -->
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </custom-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomForm from '@/base-ui/form'

export default defineComponent({
  components: {
    CustomForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      soprt: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped>
.header {
  color: #333;
  font-size: 18px;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
