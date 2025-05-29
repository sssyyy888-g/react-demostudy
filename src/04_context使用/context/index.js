import { createContext } from "react";
const UserContext = createContext(); // 创建一个上下文对象，用于存储用户信息
const ThemeContext = createContext(); // 创建一个上下文对象，用于存储主题信息

export { UserContext, ThemeContext }; // 导出上下文对象，以便在其他组件中使用