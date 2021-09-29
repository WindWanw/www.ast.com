import route from './route-lazy'

import asyRouter from './route-asy'

//配置路由和组件之间的应用关系
const routes = [{
        path: '/',
        name: 'index',
        component: route.index
    },
    {
        path: '/login',
        name: 'login',
        component: route.login
    }, {
        path: '/notFound',
        name: 'notFound',
        component: route.notFound
    }, {
        path: '/layout',
        name: 'layout',
        component: route.layout,
        redirect: '/home',
        children: [
            ...asyRouter
        ]
    },
];

export default routes;