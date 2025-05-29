import React, { PureComponent } from 'react'
import { Routes ,Route, Link, NavLink, Navigate,useNavigate, useRoutes} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import User from './pages/User'
// import Login from './pages/Login'
import './style.css'
// import NotFound from './pages/NotFound'
// import Ranking from './pages/Ranking'
// import Reccomend from './pages/Reccomend'
// import Catagory from './pages/Catagory'
// import Detail from './pages/Detail'
import routes from './router'
export function App () {
      const navigate=useNavigate()
  function navigateTo(path){

    navigate(path)
  }

    return (
      <div>
        <div className="header">
          header
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/user">User</NavLink>
            <Link to='/login'>Login</Link>
            <button onClick={()=>navigateTo('/catagory')}>分类</button>
            <button >订单</button>
          </div>
        </div>
        <div className="content">
          {
            // <Routes>
            //   <Route path='/' element={<Navigate to='/home' />} />
            //   <Route path="/home" element={<Home />}>
            //     <Route path='/home/recommend' element={<Reccomend/>} />
            //     <Route path='/home/ranking' element={<Ranking/>} />
            //   </Route>
            //   <Route path="/about" element={<About />} />
            //   <Route path="/user" element={<User />} />
            //   <Route path='/login' element={<Login />} />
            //   <Route path='/catagory' element={<Catagory />} />
            //   <Route path='/detail/:id' element={<Detail/>} />
            //   <Route path='*' element={<NotFound />} />
            // </Routes>
          }
          {useRoutes(routes)}
        </div>
        <div className="footer">
          footer
        </div>
        
      </div>
    )
  }


export default App