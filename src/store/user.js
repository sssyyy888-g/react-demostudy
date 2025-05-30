import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, loginApi} from "../apis/user";
import { setToken as _setToken,getToken, removeToken } from "../utils/token";
const UserStore=createSlice({
    name:'user',
    initialState:{
        token:getToken()||'',
        userInfo:{}
    },

    reducers:{
        setToken(state,action){
            state.token=action.payload

            _setToken(action.payload)

        },
        setUserInfo(state,{payload}){
            state.userInfo=payload
        },
        clearInfo(state){
            state.token=''
            state.userInfo={}
            removeToken()
        }
        
    }
})

const {setToken,setUserInfo,clearInfo}=UserStore.actions

//异步方法
function fetchLogin(loginForm){
    //发送请求
   return async(dispatch)=>{
    const res=await loginApi(loginForm)
    dispatch(setToken(res.data.token))
    
   }
    //存token

}
function fetchUserInfo(){
  return async(dispatch)=>{
    const res=await getUserInfo()
    dispatch(setUserInfo(res.data))
  } 
}

export {setToken,fetchLogin,fetchUserInfo,clearInfo}
export default UserStore.reducer