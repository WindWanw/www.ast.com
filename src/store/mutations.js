/**
 * 添加tab
 * @param {*} state 
 * @param {*} data 
 * @returns 
 */
const ADD_TAB = (state, data) => {
    if (state.menuList.some(item => item.path === data.path)) return;
    state.menuList.push({
        name: data.meta.name,
        path: data.path,
        meta: data.meta
    });
}


/**
 * 删除tab
 * @param {*} state 
 * @param {*} data 
 */
const DEL_TAB = (state, data) => {
    state.menuList.forEach(item => {
        if (item.path === data.path) {
            state.menuList.splice(state.menuList.indexOf(item), 1);
        }
    })
}

export default {
    ADD_TAB,
    DEL_TAB,
}