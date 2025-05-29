import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
// import Login from '../pages/Login'
// import './style.css'
import React from'react'
import NotFound from '../pages/NotFound'
import Ranking from '../pages/Ranking'
import Reccomend from '../pages/Reccomend'
import Catagory from '../pages/Catagory'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'
const Login=React.lazy(()=>import('../pages/Login'))
const routes=[
{
    path:'/',
    element:<Home/>,
   

},

{
    path:'/home',
    element:<Home/>,
    children:[{
        path:'/home',
        element:<Navigate to='/home/ranking'/>
    },
    {
        path:'/home/ranking',
        element:<Ranking/>
    },{
        path:'/home/recommend',
        element:<Reccomend/>
    }
]


},
{
    path:'/detail/:id',
    element:<Detail/>
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/about',
    element:<About/> 
},
{
    path:'/user',
    element:<User/>
},{
    
        path:'/catagory',
        element:<Catagory/>
    
},
{
    path:'*',
    element:<NotFound/>
}
]
export default routes;