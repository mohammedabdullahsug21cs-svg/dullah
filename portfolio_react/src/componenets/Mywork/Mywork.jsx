import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

function Mywork() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "97333868-3fa4-4d75-9690-7549753b3f2b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id ="mywork"className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="contact_section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently availabe to take new projects,so feel free to send a message about anything that ypu want me to work on.You can contact me anytime. </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt ='' /><p>dullah9150@gmail.com</p>
            </div>
          <div className="contact-detail">
            <img src={call} alt ='' /><p>9150917667</p>
          </div>
          <div className="contact-detail">
            <img src={location} alt ='' /><p>Melapalyum,Tirunelveli</p></div></div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlfor="name">Your Name</label>
          <input type ="text" name ="name" id ="name" placeholder="Enter Your name" />
          <label htmlfor="">Your Email</label>
          <input type ="email" placeholder="Enter Your Email" required />
          <label htmlfor="nm">Write Your Message Here</label>
          <textarea name="message" id="nm" cols="30" rows="15" placeholder="Enter Your message"></textarea>
          <button  type ='submit'className="contact-submit">Submit Now</button>

        </form>
      </div>
    </div>
  )
}

export default Mywork