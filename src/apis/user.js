import { request } from "../utils";
export function loginApi(formDta){
    return  request({
        url:'/authorizations',
        method:'post',
        data:formDta
    })
}
export function getUserInfo(){
    return  request({
        url:'/user/profile',
        method:'get'
    })
}