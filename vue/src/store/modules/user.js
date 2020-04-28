import { routerModule } from '@/router'
const user = {
  state: {
    title: '',
    token: '',
    routermodule: routerModule
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROUTERMODULE: (state, routermodule) => {
      state.routermodule = routermodule
    }
  },

  actions: {
    // 添加路由模块
    AddRouterModule({
      commit,
      state
    }, routermodule) {
      return new Promise((resolve, reject) => {
        commit('SET_ROUTERMODULE', routermodule);
        resolve()
      })
    },
    //添加标题
    AddTitle({
      commit,
      state
    }, title) {
      return new Promise((resolve, reject) => {
        commit('SET_TITLE', title);
        resolve()
      })
    }
  }
}

export default user
