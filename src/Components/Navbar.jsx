import React, { useEffect, useRef } from 'react'
import "../Css/Navbar.css";
// import logo from "../assets/logo.svg";
import { IoMenu } from "react-icons/io5";

import { Link } from 'react-router-dom';
import MenuList from './MenuList';

export default function Navbar() {
  let  NavRef=useRef();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let scrollHeight=scrollY;
      scrollHeight >= 50?NavRef.current.classList.add('sticky'):NavRef.current.classList.remove('sticky')

    })
  },[scrollY])
  return (
    <>
    <div className='main-menu-con'ref={NavRef}>
     <div className='menu'> 
        
   <div onClick={()=>scrollToSection("Hero") }className='logo'>Harsh Behate</div>
   <input type='checkbox'id='menu'/>
   <div className='menu-list'>
    <ul>
      {MenuList.map((element,index)=>{
        return(

          <li key={index} onClick={()=>scrollToSection(element.id)}><Link to="/"><span className='text'>{element.name}</span></Link></li>
        )
      })}
      
      

    </ul>
    </div>    
    <label htmlFor='menu'className='l-menu'><IoMenu className='i'/></label>
    </div>   
    </div>
    
    
    </>
  )
}
