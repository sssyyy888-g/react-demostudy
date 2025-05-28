const store=require('./store')

//当store中的数据发生变化时，会调用subscribe中的回调函数
//subscribe是订阅
store.subscribe(()=>{
    console.log(store.getState())
})

//修改store中的数据
//通过action修改
const nameAction={type:'change_name',name:'zzz'}
store.dispatch(nameAction)

//修改count
const countAction={type:'change_count',count:100}
store.dispatch(countAction)
