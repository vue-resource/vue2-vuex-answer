import Vue from 'vue'
import Router from 'vue-router'

import Empty from '@/components/Empty'
import Home from '@/views/Home'
import Topic from '@/views/Topic'
import Score from '@/views/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Empty,
      redirect:'/home',
      children:[
      	{
      		path:'home',
      		component:Home
      	},{
      		path:'topic',
      		component:Topic
      	},{
      		path:'score',
      		component:Score
      	}
      ]
    }
  ]
})
