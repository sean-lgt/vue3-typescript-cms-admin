import { createApp, App } from 'vue'
import rootApp from './App.vue'
import router from './router' //引入路由
import store from './store' // 引入vuex
// import ElementPlus from 'element-plus' //全局引入 elementPlus
// import 'element-plus/dist/index.css' // 引入 elementPlus 样式

import { registerElementComponent } from './global'

console.log('🚀【测试配置】', 'prettier') //测试prettier是否生效
// const testHusky = 'test' //测试husky

const app: App = createApp(rootApp)

// 全局注册部分elementPlus组件
registerElementComponent(app)

// .use(ElementPlus) 全局注册 ElementPlus
app.use(store).use(router).mount('#app')
