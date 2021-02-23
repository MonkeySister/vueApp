//这里放置权限
import Vue from 'vue'
// import store from 'store'

export const checkAccess = (access) => {
    let accessList = []
    if (typeof access === 'string') {
        accessList.push(access)
    } else if (access instanceof Array) {
        accessList = access
    } else {
        return false
    }

    //是否有权限
    return hasAccess(accessList, ['1', '2', '4'])
}

//检测权限
const hasAccess = (arr, arrList) => {
    return arr.some(_ => arrList.indexOf(_) > -1)
}