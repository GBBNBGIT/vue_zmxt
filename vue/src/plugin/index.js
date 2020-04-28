import * as directives from './directive'
import * as filters from './filters'

const Plugin = {}
Plugin.install = Vue => {
    // 遍历注入所有的directive
    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key])
    })

    // 遍历注入所有的filter
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
}

export default Plugin
