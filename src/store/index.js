import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import { thunk } from 'redux-thunk';
import countreducer from './modules/counter/reducer';
import homereducer from './modules/home/reducer';
//正常情况store.dispatch只能派发对象，不能派发函数

//合并reducer
const reducer=combineReducers({
    counter:countreducer,
    home:homereducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
export default store;