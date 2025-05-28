import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// import { getBanner, getRecommend } from '../store/actionCreator'
import { fetchHomeMultidata } from '../store/actionCreator'
export class Category extends PureComponent {
    componentDidMount(){
        this.props.fetchData()
    }
    // omponentDidMount(){
    //     axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
    //         const banner=res.data.data.banner.list
    //         const recommend=res.data.data.recommend.list
    //         this.props.getBannerList(banner)
    //         this.props.getRecommendList(recommend)
    //     })
    // }c
  render() {
    return (
      <div>Category</div>
    )
  }
}
function mapDispatchToProps(dispatch){
    return{
        // getBannerList(list){
        //     dispatch(getBanner(list))
        // },
        // getRecommendList(list){
        //     dispatch(getRecommend(list))
          
        // }
        fetchData(){
            dispatch(fetchHomeMultidata())
        }
    }
}

export default connect(null,mapDispatchToProps)(Category)