import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
  <section id='About'>
    <div className='container'>
   <div className='head-group'>
    <h1>About Me</h1>
    <div className='about-text-con'>
    <p>


Hi, I’m Harsh Behate, a dedicated Data Analyst with a degree in Computer Science from G.H. Raisoni College of Engineering. I have a strong passion for uncovering insights from data and using them to drive meaningful, data-backed decisions that help businesses grow and succeed.

With a deep interest in data analysis, I focus on transforming raw information into valuable insights that support strategic decision-making. My approach combines analytical thinking with practical skills to deliver clear, actionable solutions that add value to organizations.

I have hands-on experience with tools and technologies such as Power BI, DAX, Power Query, Data Flows, SQL (SSMS), MS Excel, Data Transformation, Data Modeling, as well as a foundational understanding of Python, HTML, and CSS. I specialize in building insightful dashboards and reports that enable businesses to make informed decisions and stay ahead in a competitive environment.

I am continuously expanding my skill set through personal projects and practical applications, driven by the belief that data is one of the most powerful tools for business growth. I am eager to contribute to data-driven initiatives and collaborate with like-minded professionals to turn data into actionable strategies.
    </p>
    </div>
    {/* <div className='btn-con'> */}
        <Link to="http://www.linkedin.com/in/harsh-behate-bh070723"className='l-btn'>LinkedIn</Link>
    {/* </div> */}
   </div>
   </div>


  </section>
    
    </>
  )
}
