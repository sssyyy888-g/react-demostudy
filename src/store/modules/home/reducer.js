
import * as actionTypes from './constant'
const initialState={
    banners:[],
    recommend:[]
}
function homereducer(state=initialState,action){
    switch(action.type){
        case actionTypes.GET_BANNER:
            return {...state,banners:action.list}
        case actionTypes.GET_RECOMMEND:
            return {...state,recommend:action.list}   
        default:
            return state;
    }
}
export default homereducer;