import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNum, subNum } from '../store/actionCreator'

export class About extends PureComponent {
    
   
    calcNumber(num){
        if(num<0){
            this.props.subNumber(-num)
        }else{
            this.props.addNumber(num)
        }
    }
  render() {
    const {counter,banners,recommend}=this.props
    return (
      <div>About {counter}
      <button onClick={()=>this.calcNumber(+5)}>+5</button>
      <button onClick={()=>this.calcNumber(-10)}>-10</button>
      <div className="banner">
        <ul>
            {banners.map((item,index)=>{
                return <li key={index}>{item.title}</li>
            })}
        </ul>
      </div>
      <div className="recommend">
        <ul>
            {recommend.map((item,index)=>{
                return <li key={index}>{item.title}</li>
            })}
        </ul>
      </div>
      </div>
    )
  }
}
//connect()返回值是一个高阶组件，高阶组件的作用是将组件与redux联系起来，
//高阶组件返回的是一个新的组件，新的组件会将redux中的数据作为props传递给组件
//connect()的第一个参数是一个函数，这个函数的作用是将redux中的数据作为props传递给组件
//connect()的第二个参数是一个组件，这个组件就是需要被高阶组件包装的组件
function mapStateToProps(state){
  return {counter:state.counter.counter,banners:state.home.banners,recommend:state.home.recommend}
}
function mapDispatchToProps(dispatch){
    return {
        addNumber(num){
          dispatch(addNum(num))
        },
        subNumber(num){
          dispatch(subNum(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)