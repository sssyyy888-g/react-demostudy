const {createStore}=require('redux');
//初始化数据
const initialState={
    name:'ppp',
    count:0
}
//创建reducer
//接受两个参数，参数一：store中目前保存的state,第二个参数是action
function reducer(state=initialState,action){
    // console.log(state,action)
    //如果有新数据更新时，返回更新后新的state
    if(action.type==='change_name'){
       return {...state,name:action.name}
    }
    if(action.type==='change_count'){
        return {...state,count:action.count}
    }
    //如果没有新数据更新时，返回原来的state
    return state
}

//创建的store，接受一个reducer
const store=createStore(reducer)

module.exports=store;