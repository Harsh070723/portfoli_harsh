import React from 'react'
import "../Css/Home.css"
import ProjectCard from '../Components/ProjectCard'
import project1 from"./../assets/Images/projectsImg/project1.jpg"
import project2 from"./../assets/Images/projectsImg/project2.jpg"
import project3 from"./../assets/Images/projectsImg/project3.jpg"
import { ProjectList } from '../js/projectList'

export default function Projects() {
  return (
  <>
  
  <section id='Projects'>
    <div className='container'>
        <div className='head-group  justfy-content-center'>
            <div   className='head-text'>
                <h1 className='topic'>Projects</h1>
            </div>
            <div className='para-text-con'>
                <p>Below are the some of my Data Analytics projects using SQL, Python, Tableau & Excel.</p>
            </div>
        </div>
        {/* 888888 */}
<div className='wrapper'>
        <div   className='grid-container '>
            {ProjectList.map((element,index)=>{
                return(
                    <ProjectCard data={element} key={index}/>
                )
            })}

        </div>
    </div>
    </div>

  </section>
  </>
  )
}
