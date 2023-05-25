import React from 'react'
import fb from './Images/Contact/facebook.png';
import gith from './Images/Contact/github.png';
import insta from './Images/Contact/instagram.png';
import twitter from './Images/Contact/twitter.png';
import ld from './Images/Contact/linkedin.png';
export default function Contact() {
  return (
    <>
     <div id="contacts">
        <div className="headContact">Contact</div>
        <div className="ConContent">
            <div className="conContent1">Wanna have some talk on Tech ?</div>
            <div className="conContent2">Let's Connect</div>
        </div>
        <div className="icon">
            <div className="icon1">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishal-kumar-mahto-347757206/"><img src={ld} alt=""/></a> 
             <a target="_blank" rel="noreferrer" href="https://github.com/finch-arch"><img src={gith} alt=""/></a>
             <a target="_blank" rel="noreferrer" href="https://twitter.com/VishalK31398801"><img src={twitter} alt=""/></a>
            </div>
            <div className="icon2">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/vishal.k.mahto/"><img src={fb} alt=""/></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_vishaaal_02/"><img src={insta} alt=""/></a>
            </div>
        </div>
    </div>
    <div className="footer">
        @2023 Vishal Kumar Mahto
    </div>
    </>
  )
}
