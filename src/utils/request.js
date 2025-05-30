import axios from 'axios'

import { getToken, removeToken } from './token'
import router from '../router'

const request=axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:10000
})

request.interceptors.request.use(config=>{

    const token=getToken()
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }

    return config

},err=>{
    return Promise.reject(err)
})

request.interceptors.response.use(res=>{
    return res.data
},err=>{
    // if(err.response.status===401){
    //     removeToken()
    //     router.navigate('/login')
    //     window.location.reload()
    // }
    return Promise.reject(err)
})

export default request