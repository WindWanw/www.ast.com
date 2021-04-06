//登录
const login = () => import('../views/login.vue');
//未找到页面
const notFound = () => import('../views/notFound.vue');
//后台架构
const layout = () => import('../views/layout.vue');
//首页
const home = () => import('@/views/home.vue')

export default {
    login,
    notFound,
    layout,
    home
}