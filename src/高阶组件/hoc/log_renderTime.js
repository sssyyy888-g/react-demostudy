import { PureComponent } from "react";
function logRenderTime(Cpn){
    return class NewCpn extends PureComponent{
    UNSAFE_componentWillMount(){
        this.beginTime=new Date().getTime()

    }
    componentDidMount(){
        this.endTime=new Date().getTime()
        const cha=this.endTime-this.beginTime; 
        console.log(cha);
        
    }
        constructor(props){
            super(props)
            this.state={}
        }
        render(){
            return (
                <Cpn {...this.props}/>
            )
        }
    }

}
export default logRenderTime;