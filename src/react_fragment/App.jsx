import React, { PureComponent ,Fragment} from 'react'

export class App extends PureComponent {
    constructor(){
        super()
        this.state={
            sections:[
                {id:1,name:'react'},
                {id:2,name:'vue'},
                {id:3,name:'angular'}
            ]
        }
    }
  render() {
    const {sections}=this.state

    return (
      <Fragment>
        <h1>Hello World</h1>
        <p>我是App内容</p>
        {
            sections.map(item=>{
                return (
                    <Fragment key={item.id}>
                        <h2>{item.id}</h2>
                        <p>我是{item.name}内容</p>
                    </Fragment>
                )
            })
        }
      </Fragment>
    )
  }
}

export default App