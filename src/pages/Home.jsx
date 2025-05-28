import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'
import axios from 'axios'
import store from '../store/index'
import { fetchData, getBanners,getRecommend } from '../store/features/home'
export class Home extends PureComponent {
    componentDidMount(){
        // axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
        //    const banners=res.data.data.banner.list
        //    const recommend=res.data.data.recommend.list
        //     store.dispatch(getBanners(banners))
        //     store.dispatch(getRecommend(recommend))
        // })
        this.props.fetchDA()
    }
    addNumber(num){
        this.props.addNumber(num)
    }
  render() {
    const {counter}=this.props
    return (
      <div>
        Home count: {counter}
        <div>
            <button onClick={()=>this.addNumber(1)}>+1</button>
            <button onClick={()=>this.addNumber(5)}>+5</button>
        </div>
       </div>
    )
  }
}
function mapStateToProps(state){
    return {
        counter:state.counter.counter
    }
}
function mapDispatchToProps(dispatch){
    return {

        addNumber(num){
            dispatch(addNumber(num))
        },
        fetchDA(){
            dispatch(fetchData())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)