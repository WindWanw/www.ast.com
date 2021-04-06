/**
 * 生成tab
 * @param {*} context 
 * @param {*} data 
 * @returns 
 */
const addTab = (context, data) => context.commit('ADD_TAB', data);


/**
 * 删除tab
 * @param {*} context 
 * @param {*} data 
 * @returns 
 */
const delTab = (context, data) => new Promise((resolve, reject) => {
    context.commit('DEL_TAB', data);
    resolve(context.state.menuList);
})

export default {
    addTab,
    delTab,
}