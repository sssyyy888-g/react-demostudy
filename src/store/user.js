import { createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/index";

import { setToken as _setToken,getToken } from "../utils/token";
const UserStore=createSlice({
    name:'user',
    initialState:{
        token:getToken()||''
    },

    reducers:{
        setToken(state,action){
            state.token=action.payload

            _setToken(action.payload)

        }
    }
})

const {setToken}=UserStore.actions

//异步方法
function fetchLogin(loginForm){
    //发送请求
   return async(dispatch)=>{
    const res=await request.post('/authorizations',loginForm)
    dispatch(setToken(res.data.token))
    
   }
    //存token

}

export {setToken,fetchLogin}
export default UserStore.reducer