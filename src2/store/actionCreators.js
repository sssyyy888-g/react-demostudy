const {CHANGE_NAME,CHANGE_COUNT}=require('./constants')
function changeNameAction(name){
    return {
        type:CHANGE_NAME,
        name
    }
}
function changeCountAction(count){
    return {
        type:CHANGE_COUNT,
        count
    }
}
module.exports={changeNameAction,changeCountAction}