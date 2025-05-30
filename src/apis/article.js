import { request } from "../utils";

export function getChannels(){
    return request({
        url:'/channels',
        method:'get'
    })
}
export function postArticle(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'post',
        data:data
    })
}

export function getArticleList(params){
    return request({
        url:"/mp/articles",
        method:'get',
        params
    })
}

export function deleteArticle(id){
   return request({
    url:`/mp/articles/${id}`,
    method:'delete'
   }) 
}

export function getDetail(id){
    return request({
        url:`/mp/articles/${id}`,
        method:'get'

    })
}
export function putArticle(data){
    return request({
        url:`/mp/articles/${data.id}?draft=false`,
        method:'put',
        data:data
    })
}