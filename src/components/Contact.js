import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in"
         data-aos-duration="1000">
          <a href='https://www.instagram.com/sonalikeshri_23/' className="items">
          <FaInstagram className='icons'/>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100072521124439' className="items">
          <CiFacebook className='icons'/>
          </a>
          <a href='http://www.linkedin.com/in/sonali-keshri-522b9321b' className="items">
            <CiLinkedin className='icons'/>
          </a>
          <a href='https://github.com/sonalikeshri04' className="items">
            <FaGithubSquare className='icons'/>
          </a>
          <a href='mailto:skkeshrirng@gmail.com' className="items">
            <BiLogoGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
