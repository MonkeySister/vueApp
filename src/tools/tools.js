// 手机号隐藏中间3位
export function hidePhone(phone) {
    if (!phone) return phone
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 类型判断
export function isType(target, type) {
    let targetType = Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
    return targetType === type.toLowerCase()
}

//对象属性剔除
export function omit(object, props = []) {
    let res = {}
    Object.keys(object).forEach(key => {
        if (props.includes(key) === false) {
            res[key] = typeof object[key] === 'object' && object[key] !== null ? JSON.parse(JSON
                .stringify(object[key])) : object[key]
        }
    })
    return res
}

//防抖
//防抖用于减少函数请求次数，对于频繁的请求，只执行这些请求的最后一次
export function debounce(func, wait = 300, immediate = false) {
    let timer, ctx;
    let later = (arg) => setTimeout(() => {
        func.apply(ctx, arg)
        timer = ctx = null
    }, wait)
    return function(...arg) {
        if (!timer) {
            timer = later(arg)
            ctx = this
            if (immediate) {
                func.apply(ctx, arg)
            }
        } else {
            clearTimeout(timer)
            timer = later(arg)
        }
    }
}

//节流用于减少函数请求次数
export function throttle(func, delay) {
    let timer = null
    return function(...arg) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arg)
                timer = null
            }, delay)
        }
    }
}


//识别浏览去及平台
export function getPlatformInfo() {
    //运行环境是浏览器 
    let inBrowser = typeof window !== 'undefined';
    //运行环境是微信 
    let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    //浏览器 UA 判断 
    let UA = inBrowser && window.navigator.userAgent.toLowerCase();
    if (UA) {
        let platforms = {
            IE: /msie|trident/.test(UA),
            IE9: UA.indexOf('msie 9.0') > 0,
            Edge: UA.indexOf('edge/') > 0,
            Android: UA.indexOf('android') > 0 || (weexPlatform === 'android'),
            IOS: /iphone|ipad|ipod|ios/.test(UA) || (weexPlatform === 'ios'),
            Chrome: /chrome\/\d+/.test(UA) && !(UA.indexOf('edge/') > 0),
        }
        for (const key in platforms) {
            if (platforms.hasOwnProperty(key)) {
                if (platforms[key]) return key
            }
        }
    }
}

//金额输入校验
export function moneyInput(value) {
    //确保输入的是数字
    value = value.replace(/[^\d\.]/g, '');
    //确保第一个输入的是数字
    value = value.replace(/^\./g, '0.');
    //确保不能输入两个小数点
    value = value.replace(/\.{2,}/g, '.');
    //保证小数点只出现一次，而不能出现两次以上     
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //确保只能输入两位小数
    value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}


//判断是否IOS

export function isIOS() {
    let isIphone = navigator.userAgent.includes('iPhone')
    let isIpad = navigator.userAgent.includes('iPad')
    return isIphone || isIpad
}