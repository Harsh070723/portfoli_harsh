import React from 'react'
import "../Css/Home.css"
export default function ResumeCard({data}) {
  let {date,position,companyName,objectives}=data;
  return (
  <>
  
  <div className='card-box'>
                <div className='card'>
                <span className='date'>
                    {date}
</span>
                    <h2 className='tittle'>{position}</h2>

<span className='role-position'>
{companyName}
</span>
                    <br/>
                    <ul>
                      {objectives.map((element,index)=>{
                        let {discription}=element;
                        return(
<li className='objectives'key={index}>
{discription}
                        </li>
                        )
                      })}
                        
                       
                    </ul>
                </div>
                </div>
  
  </>
  )
}
// Plienstack

// Performed Data Modeling , ELT on the data provided , Created Interactive Power Bi dashboard Report.

// Performed data cleaning to prepare the data for further analysis

// Communicated with stakeholders to understand business requirements and translated them into technical specifications

// Conducted comprehensive data analysis and visualization using Excel to identify cost-saving business opportunities and process improvement opportunities

// Monitored key Business KPIs, and communicated and presented findings, recommendations and analytical reports, facilitating informed decision-making