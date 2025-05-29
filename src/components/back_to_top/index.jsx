import React from 'react'
import { useState,useEffect } from 'react';
import './style.scss'
export default function UsebackToUp(props) {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(()=>{
      const handleScroll=()=>{
        const scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        setIsVisible(scrollTop>window.innerHeight);
      }
      
    const throttledScroll = throttle(handleScroll, 300);
    window.addEventListener('scroll', throttledScroll);

    // 清理函数
    return () => window.removeEventListener('scroll', throttledScroll);

    })
      // 节流函数
  const throttle = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          timeoutId = null;
        }, delay);
      }
    };
  };
  return (
    <button
     className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
        <span className='back-to-top-text'>返回顶部</span>
        <span  className="back-to-top-icon">↑</span>
    </button>
  )
}
