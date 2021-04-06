/**
 * 设置缓存
 * @param {缓存名称} name 
 * @param {缓存值} value 
 */
const setCache = (name, value) => {
    localStorage.setItem(`cache_${name}`, JSON.stringify(value))
}

/**
 * 获取缓存
 * @param {缓存名称} name 
 * @returns 
 */
const getCache = (name) => {
    return JSON.parse(localStorage.getItem(`cache_${name}`))
}


export default {
    setCache,
    getCache
}