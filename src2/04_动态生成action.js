const store=require('./store')
const {changeCountAction,changeNameAction}=require('./actionCreater')
//当store中的数据发生变化时，会调用subscribe中的回调函数
//subscribe是订阅
store.subscribe(()=>{
    console.log(store.getState())
})

//actionCreater：创建action的函数
// function changeNameAction(name){
//     return {
//         type:"change_name",
//         name
//     }
// }
// function changeCountAction(count){
//     return {
//         type:"change_count",
//         count
//     }
// }
//修改store中的数据
//通过action修改
store.dispatch({type:'change_name',name:'zzz'})
store.dispatch(changeNameAction('KOBE'))
//修改count

store.dispatch({type:'change_count',count:100})
store.dispatch(changeCountAction(1000))
