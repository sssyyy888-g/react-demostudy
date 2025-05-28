const {CHANGE_NAME,CHANGE_COUNT}=require('./constants')
//初始化数据
const initialState={
    name:'ppp',
    count:0
}
//创建reducer
//接受两个参数，参数一：store中目前保存的state,第二个参数是action
function reducer(state=initialState,action){
    

    switch(action.type){
        case 'CHANGE_NAME':
            return {...state,name:action.name}
        case 'CHANGE_COUNT':
            return {...state,count:action.count}   
        default:
            return state     
    }
   
}
module.exports=reducer;