import React from 'react'
import { BiSolidDirections } from "react-icons/bi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
    <section id='Contact'>
        <div className='container'>
            <div className='head-group justfy-content-center'>
                <div className='head-text'>
                    <h1  className='topic'>Contact Us</h1>
                </div>
                <div className='para-text-con'>
                    <p>Below are the details to reach out to me!</p>
                </div>
            </div>

          <div className='wrapper'>
            <div className='grid-container'>
                <div className='card-box'>
                    <BiSolidDirections className='i'/>
                    <h2 className='tittle'>ADDRESS</h2>
                    <div className='para-text-con'>
                        <p className='tittle'>Trimurti Nagar Nagpur Maharashtra (440022)</p>
                    </div>
                </div>
                <div className='card-box'>
                    <IoCallSharp className='i'/>
                    <h2 className='tittle'>CONTACT NUMBER</h2>
                    <span className='tittle'>+91 7249785132</span>
                </div>
                <Link to="mailto:working.harsh77@gmail.com" className='card-box'style={{textDecoration:'none'}}>
                    <MdOutlineAttachEmail className='i'/>
                    <h2 className='tittle'>EMAIL ADDRESS</h2>
                    <span className='tittle'>working.harsh77@gmail.com</span>

                </Link>
               
            </div>
          </div>

        </div>
    </section>
    
    </>
  )
}
