import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from ".././assets/Images/profileImg.jpg"
export default function Hero() {
  return (
   <>
  <section id='Hero'>
    <div className='container-row'>
    <div className='h-box'>
      <div className='details-con'>
        <h3 className='sub-head'>Hello</h3>
        <div className='head-text'>
          <h1><span className='style'>I'am</span> Harsh <br/>
          Behate
          </h1>
        </div>
        <div className='profession'>
          <h2>Data Analyst</h2>
        </div>
        <div className='para-text-con'>
          <p>Combining analytical thinking with hands-on expertise to deliver data solutions that not only answer business questions but also create new opportunities for growth. </p>
        </div>
        <div className='btn-con'>
          <Link to="https://github.com/Harsh070723" target='blank'className='work-btn'>My work</Link>
        </div>
      </div>
    </div>
   {/* <div className='h-box'> */}
    <div className='profile-img-con'>
      <img src={profileImg}alt=''/>
    {/* </div> */}
    
    
      </div>
    </div> 
    
    </section>

   </>
  )
}
