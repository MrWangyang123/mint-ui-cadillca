import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'



//引入组件mintui库
//引入指定组件
import {Button,Header,Swipe,SwipeItem,Cell} from "mint-ui";
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Cell.name,Cell);

//完整引入
import MintUI  from "mint-ui";
Vue.use(MintUI)

//引入vue-resource发送ajax
//1：引入vue-resource 库所有组件
import VueResource from "vue-resource";
//2:将所有组件注册
 Vue.use(VueResource);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
