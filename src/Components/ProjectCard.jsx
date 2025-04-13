import React from 'react'
import "../Css/ProjectCard.css"
export default function ProjectCard({data}) {
    let {projectImg,discription,title}=data;
    
  return (
   <>
   
   <div className='p-card'>
    <div className='img-con'>
        <img src={`${projectImg}`}alt=''/>
    </div>
    <div className='head-group'>
        <h2 className='tittle'>{title}</h2>
    </div>
    <div className='para-text-con'>
        <p style={{fontSize:'14px'}}>
        {discription}.
        </p>
    </div>
   </div>
   
   
   </>
  )
}
