//这里放置权限
import store from "vuex"
import Vue from "vue"

export const checkAccess = (access) => {
  let accessList = []
  if (typeof access === "string") {
    accessList.push(access)
  } else if (access instanceof Array) {
    accessList = access
  } else {
    return false
  }

  //是否有权限
  return hasAccess(accessList, ["1", "2", "4"])
}

//检测权限
const hasAccess = (arr, arrList) => {
  return arr.some((_) => store.getters.accessList.indexOf(_) > -1)
}

// 全局注册自定义指令来检测有没有权限
Vue.directive("permission", {
  inserted(el, binding) {
    let permission = binding.value
    if (permission) {
      let hasPermission = checkAccess(permission)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
})
