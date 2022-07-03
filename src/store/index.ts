import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'

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

export default store
