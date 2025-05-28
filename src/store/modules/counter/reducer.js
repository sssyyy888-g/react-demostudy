
import * as actionTypes from './constant'
const initialState={
    counter:100,
    
}
function countreducer(state=initialState,action){
    switch(action.type){
        case actionTypes.ADD_NUM:
            return {...state,counter:state.counter+action.num}
        case actionTypes.SUB_NUM:
            return {...state,counter:state.counter-action.num}
        
        default:
            return state;
    }
}
export default countreducer;