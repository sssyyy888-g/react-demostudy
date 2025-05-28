import * as actionTypes from './constant'


export function addNum(num){
    return {
        type:actionTypes.ADD_NUM,
        num
    }
}
export function subNum(num){
    return {
        type:actionTypes.SUB_NUM,
        num
    } 
}
