import route from './route-lazy.js'

const asyRoute = [{
    path: '/home',
    name: 'home',
    component: route.home,
    meta: {
        parent: '',
        name: '首页',
        iconfont: 'iconfont iconhome_icon',
        isLogin: true,
    },
    children: []
}, ];


export default asyRoute;