import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext,UserContext } from './04_context使用/context';
// import App from '../src/01_不使用hooks/App';
// import App from './02_计数器的实现/App';
// import App from './03_useEffect使用/App'
// import App from './04_context使用/App'
// import App from './05_useCallback和useMemo/App'
import App from './06_useRef/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{name:'张三',age:18}}>
    <ThemeContext.Provider value={{color:'red'}}>
      <App />
    </ThemeContext.Provider>  
  </UserContext.Provider>
);

