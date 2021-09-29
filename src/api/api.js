import {
    fetchPost,
    fetchGet
} from './fetch';

export default {

    /*
     *
     *  登录
     *
     */
    login(params) {
        return fetchPost('login', params);
    },


    getYsLog(params) {
        return fetchGet('ys/event/gacha_info/api/getGachaLog', params);
    }

}