import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

/**
 * @description:vuex数据持久化处理，部分存储到loacl,刷新时重置
 * @return {*}
 */
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

// 自定义hooks 为了更好的使用vuex+ts
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
