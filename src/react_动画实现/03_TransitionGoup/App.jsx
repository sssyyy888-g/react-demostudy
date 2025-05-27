import React, { PureComponent } from 'react'
import { TransitionGroup ,CSSTransition} from 'react-transition-group'
import {createRef} from'react'
import './style.css'

export class App extends PureComponent {
   constructor() {
  super()
  const Books = [
    {id:1,name:'React',price:100},
    {id:2,name:'Vue',price:200},
    {id:3,name:'Angular',price:300},
    {id:4,name:'Node',price:400},
    {id:5,name:'Python',price:500}
  ]
  
  // 正确初始化格式：{1: ref, 2: ref, ...}
  const initialRefs = Books.reduce((acc, book) => {
    acc[book.id] = createRef()
    return acc
  }, {})

  this.state = {
    books: Books,
    nodeRefs: initialRefs
  }
}
    addBooks = () => {
  const newId = Math.max(...this.state.books.map(b => b.id)) + 1
  const newBook = {id: newId, name:'PHP', price:600}
  
  this.setState(prev => ({
    books: [...prev.books, newBook],
    nodeRefs: {
      ...prev.nodeRefs,
      [newId]: createRef() // 正确添加新ref
    }
  }))
}
    deltBook(id){
        let books=this.state.books.filter(item=>item.id!==id)
        this.setState({
            books:books
        })
    }
    render() {
  const {books, nodeRefs} = this.state
  return (
    <div>
      <h1>App</h1>
      <TransitionGroup component="ul">
        {books.map(item => (
          <CSSTransition 
            key={item.id}
            nodeRef={nodeRefs[item.id]}
            classNames="book"
            timeout={2000}
            unmountOnExit
          >
            <li ref={nodeRefs[item.id]}>
              {item.id}-{item.name}-{item.price}
              <button onClick={() => this.deltBook(item.id)}>删除</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button onClick={this.addBooks}>添加新书籍</button>
    </div>
  )
}
}

export default App