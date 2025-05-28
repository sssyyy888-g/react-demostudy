import {createStore,applyMiddleware,compose} from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';
//正常情况store.dispatch只能派发对象，不能派发函数

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
export default store;