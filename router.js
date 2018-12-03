import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import TestContainer from "./components/testContainer.vue"
import listContainer from "./components/listContainer.vue"
import homeContainer from "./components/tabbar/HomeContainer.vue"
import tryContainer from "./components/tabbar/tryContainer.vue"
Vue.use(Router)

export default new Router({
  routes: [
    
    {path:'/',component:HelloContainer},
    {path:'/test',component:TestContainer},
    {path:'/list',component:listContainer},
    {path:'/home',component:homeContainer},
    {path:'/try',component:tryContainer} 
  ]
})
