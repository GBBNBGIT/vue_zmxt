import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// import HelloWorld from '@/components/HelloWorld'
import trainingCenter from './trainingCenter'
import Layout from '@/views/layout/layout';


Vue.use(Router)
//合并路由
const routes = [{
  hidden: true,
  path: '',
  name: 'default',
  meta: {
    title: ''
  },
  component: Layout,
  redirect: 'default',
  children: [{
    path: 'default',
    meta: {
      title: '首页'
    },
    component: () =>
      import('@/views/layout/index.vue'),
  }]
},
{
  path: '/404',
  component: () =>
    import('@/views/404'),
  hidden: true
}].concat(trainingCenter);
export const routerModule = routes.map((el, index) => {
  return el.name;
})
var router = new Router({
  //router采用的模式
  mode: 'history',//hash
  base: '/fishing/',
  //设置路由
  routes: routes,
  // 设置滚动位置
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
//全局钩子，路由加载前的调整
//to:即将要进入的目标 路由对象,from:当前导航正要离开的路由,next:一定要调用该方法来 resolve 这个钩子
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    store.commit('SET_TITLE', to.meta.title)
  }
  next()
  // next('/404')
})
export default router
