import React from 'react'
import ResumeCard from '../Components/ResumeCard'
import { Link } from 'react-router-dom'
import { ExperienceList } from '../js/ExperienceList'


export default function Resume() {
  const handleViewResume = () => {
    // This opens the resume PDF in a new browser tab
    window.open('/HarshResume.pdf', '_blank');
  };
  return (
    <>
    
    <section id='Resume'>
    <div className='container'>
        <div className='head-group justfy-content-center'>
        <div className='head-text'>
            <h1 className='topic'>Resume</h1>
        </div>
        <div className='para-text-con'>
            <p>
            I love taking numbers and raw data and turning them into meaningful and actionable insights! Proficient in SQL, Advanced Microsoft Excel, Python, Microsoft Power BI and Tableau. Proven expertise in data analysis, visualization, reporting, statistical analysis, and machine learning algorithms.
            </p>
        </div>
        <button onClick={handleViewResume} className='btn-to-link' >VIEW RESUME</button>
        </div>
        <div className='exp-container justfy-content-center'>
            <div className='head-text'>
                <h1 className='sub-topic'>Experience</h1>
            <hr className='row-divider'/>
            </div>
        </div>
        <div className='row'>
            <div className='row-box'>
             
               {ExperienceList.map((element,index)=>{
                return(
                  <ResumeCard data={element} key={index}/>
                )
               })}

          </div>
          </div>
        <br/>
        <br/>

        <div className='row'>
          <div className='justfy-content-center'>
            <h1  className='sub-topic'>Education</h1>
            <hr className='row-divider'/>
          </div>
          <div className='row-box'>
            <div className='card-box'>
                <div className='card'>
            <span className='date'>
                    September 2023 - December 2023</span>
                    <h2 className='tittle'>Graduation
2021 june -2025 june
GH Raisoni College of Engineering</h2>
                    <span className='role-position'>
Branch : Computer science and engineering 
                        
                    </span>
            </div>
          </div>
          {/* ddddd */}
          <div className='card-box'>
                <div className='card'>
            <span className='date'>
        
 June 2020  -2021 June 
                    </span>

                    <h2 className='tittle'>
                  HSC     (Higher Secondary Certificate)                              GH Raisoni Vidhya Niketan Nagpur
                        
                        

                    </h2>
                    <span className='role-position'>Branch:PCM</span>
            </div>
          </div>
          </div>
        </div>
    </div>


    </section>
    
    </>
  )
}
