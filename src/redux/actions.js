import { actionTypes } from './actionTypes';

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type: actionTypes.SWITCH_MENU,
        menuName
    }
}

// 登录提交，更改登录状态
export function loginIn() {
    return {
        type: actionTypes.LOGIN_IN
    }
}