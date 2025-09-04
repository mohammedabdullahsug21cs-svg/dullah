import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div id ="Footer"className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer} alt='' />
                <p>
                    I am a frontend developer from,Melapalayum with 2 months of experience and I have well knowledge in Sql.
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt ='' />
                    <input type="email" placeholder='Enter Your Email' /> 
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left"> © 2025 Dullah Mohamed.All Rights Reserved</div>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer