import * as actionTypes from './constant'
import axios from 'axios'

export function getBanner(list){
    return {
        type:actionTypes.GET_BANNER,
        list
    }
}
export function getRecommend(list){
    return {
        type:actionTypes.GET_RECOMMEND,
        list
    } 
}
export const fetchHomeMultidata=()=>{
    return function foo(dispatch,getState){
        // console.log('foo');
        axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
            const banner=res.data.data.banner.list
            const recommend=res.data.data.recommend.list
             dispatch({type:actionTypes.GET_BANNER,list:banner})
             dispatch({type:actionTypes.GET_RECOMMEND,list:recommend})
        })
    }
    // 函数自动执行
    
} 