import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber, subNumber } from '../store/features/counter'

export class Profile extends PureComponent {
    subNumber(num){
        this.props.subNumber(num)
    }
  render() {
    const {counter,banners,recommend}=this.props
    return (
      <div>
        Profile count :{counter}
        <div>
            <button onClick={()=>this.subNumber(5)}>-5</button>
            <button onClick={()=>this.subNumber(10)}>-10</button>
        </div>
        <div>
            {
                banners.map((item,index)=>{
                    return <li key={index}>{item.title}</li>
                })
            }
        </div>
        <div>
            {
                recommend.map((item,index)=>{
                    return <li key={index}>{item.title}</li>
                })
            }
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    counter:state.counter.counter,
    banners:state.home.banners,
    recommend:state.home.recommend
  }
}
function mapDispatchToProps(dispatch){
    return {
    adNumber(num){
        dispatch(addNumber(num))
    },
    subNumber(num){
        dispatch(subNumber(num))
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)