import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const StickySocialIcon = () => {
  return (
    <>
      <div className="sticky-icon">
        
        <a href="https://www.facebook.com" className="Facebook">
          <FaFacebook className="icon-global" /> Facebook </a>
        {/* <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
            <FaGooglePlusG className="icon-global"/>Google + </a> */}
        <a href="https://www.youtube.com" className="Youtube">
          <FaYoutube className="icon-global" /> Youtube </a>
        
        <a href="https://www.linkedin.com/" className="LinkedIn">
          <FaLinkedinIn className="icon-global" /> Linked In </a>
        <a href="" className="Whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon-global" />Whatsapp </a>
      </div>
      
      {/*End Sticky Icon*/}

    </>
  )
}
export default StickySocialIcon