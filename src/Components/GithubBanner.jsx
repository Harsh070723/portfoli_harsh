import React from 'react'
import "../Css/Home.css"
import { Link } from 'react-router-dom'
export default function GithubBanner() {
  return (
    <div className='github-banner'>
        <div  className='container'>
         <div className='head-group justfy-content-center'>
            <div className='head-text'>
                <h1 className='topic'>More Projects on Github</h1>
            </div>
            <Link to="https://github.com/Harsh070723"className="github-btn">VIEW GITHUB</Link>
         </div>
        </div>
    </div>
  )
}
