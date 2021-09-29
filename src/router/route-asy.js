import route from './route-lazy.js'

const asyRoute = [{
        path: '/home',
        name: 'home',
        component: route.home,
        meta: {
            parent: '',
            name: '首页',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/user',
        name: 'user',
        component: route.home,
        meta: {
            parent: '',
            name: '用户管理',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: [{
                path: '/index',
                name: 'index',
                component: route.home,
                meta: {
                    parent: '',
                    name: '前台人员',
                    iconfont: 'iconfont iconshouye1',
                    isLogin: true,
                },
                children: []
            },
            {
                path: '/admin',
                name: 'admin',
                component: route.home,
                meta: {
                    parent: '',
                    name: '后台用户',
                    iconfont: 'iconfont iconshouye1',
                    isLogin: true,
                },
                children: [{
                        path: '/adminUser',
                        name: 'adminUser',
                        component: route.home,
                        meta: {
                            parent: '',
                            name: '人员列表',
                            iconfont: 'iconfont iconshouye1',
                            isLogin: true,
                        },
                        children: []
                    },
                    {
                        path: '/adminM',
                        name: 'adminM',
                        component: route.home,
                        meta: {
                            parent: '',
                            name: '人员管理',
                            iconfont: 'iconfont iconshouye1',
                            isLogin: true,
                        },
                        children: []
                    },
                ]
            },
        ]
    },
    {
        path: '/order',
        name: 'order',
        component: route.home,
        meta: {
            parent: '',
            name: '订单管理',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file',
        name: 'fole',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file1',
        name: 'fole1',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理1',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file2',
        name: 'fole2',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理2',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file3',
        name: 'fole3',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理3',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file4',
        name: 'fole4',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理4',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file5',
        name: 'fole5',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理5',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file6',
        name: 'fole6',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理6',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file7',
        name: 'fole7',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理7',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file8',
        name: 'fole8',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理8',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file9',
        name: 'fole9',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理9',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
    {
        path: '/file10',
        name: 'fole10',
        component: route.home,
        meta: {
            parent: '',
            name: '文件管理10',
            iconfont: 'iconfont iconshouye1',
            isLogin: true,
        },
        children: []
    },
];


export default asyRoute;