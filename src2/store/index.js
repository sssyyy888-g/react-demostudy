const {createStore}=require('redux');
const reducer=require('./reducer')

//创建的store，接受一个reducer
const store=createStore(reducer)

module.exports=store;