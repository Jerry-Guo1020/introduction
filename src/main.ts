import { createApp } from 'vue'
import App from './App.vue'
import { Button, Layout, Menu, Switch, Table, Card } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'  // 使用新版本的 CSS
import naive from 'naive-ui'
import router from './router'

const app = createApp(App)

// 按需注册组件
app.use(Button)
   .use(Layout)
   .use(Menu)
   .use(Switch)
   .use(Table)
   .use(Card)
app.use(naive)

app.use(router)


app.mount('#app')

