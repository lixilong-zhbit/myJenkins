import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search' 
import EditData from '@/components/EditData' 
import Services from '@/components/Services' 
Vue.use(Router)

export default new Router({
  mode :'history',   //加上后，可去掉href 里的 #号
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/editData',
      name: 'editData',
      component: EditData
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    }
  ]
})
