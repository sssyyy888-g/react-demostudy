
import * as actionTypes from './constant'
const initialState={
    counter:100,
    banners:[],
    recommend:[]
}
function reducer(state=initialState,action){
    switch(action.type){
        case actionTypes.ADD_NUM:
            return {...state,counter:state.counter+action.num}
        case actionTypes.SUB_NUM:
            return {...state,counter:state.counter-action.num}
        case actionTypes.GET_BANNER:
            return {...state,banners:action.list}
        case actionTypes.GET_RECOMMEND:
            return {...state,recommend:action.list}   
        default:
            return state;
    }
}
export default reducer;