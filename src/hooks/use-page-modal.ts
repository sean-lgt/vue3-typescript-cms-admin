import { ref } from 'vue'

import PageModal from '@/components/page-modal'

type CallBackFn = () => void

export function usePageModal(newCb?: CallBackFn, editCb?: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {} // 先清空
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    console.log('🚀【item】', item)
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
