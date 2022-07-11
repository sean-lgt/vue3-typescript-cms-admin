<template>
  <div class="page-content">
    <custom-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="EditPen" size="mini" type="text">编辑</el-button>
          <el-button icon="Delete" size="mini" type="text">删除</el-button>
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import CustomTable from '@/base-ui/table'

export default defineComponent({
  components: {
    CustomTable
  },
  props: {
    // 表格配置信息
    contentTableConfig: {
      type: Object,
      required: true
    },
    // 根据pagename进行逻辑处理
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const getPageData = (queryInfo?: any) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 通过getters动态获取相对应的值 返回一个函数 传pagename
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    // const userCount = computed(()=>store.state.system.userCount)

    return {
      dataList,
      getPageData
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
