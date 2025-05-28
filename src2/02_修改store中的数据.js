const store=require('./store')

console.log(store.getState());

//修改store中的数据
//通过action修改
const nameAction={type:'change_name',name:'zzz'}
store.dispatch(nameAction)

//修改count
const countAction={type:'change_count',count:100}
store.dispatch(countAction)
console.log(store.getState());