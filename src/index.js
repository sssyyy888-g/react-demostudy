import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import App from './01_内联样式CSS/App';
// import App from './02_普通CSS写法/App'
// import App from './03_CSSModule写法/App'

// import App from './04_less编写方式/App'
import App from './05_cssINjs/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{color:"purple"}}>
     <App />
  </ThemeProvider>
   
  
);

//ES6标签模版字符串
let name='zhangsan'
let age=18
// const str=`my name is ${name},i am ${age} years old`
// console.log(str)
// 标签模版字符串的用法
function foo(...args){
  console.log(args)
}
// foo("hello","world")
foo`hello${name},i am ${age} years old`
