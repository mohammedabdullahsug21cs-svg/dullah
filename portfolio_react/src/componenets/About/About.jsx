import React from 'react'
import './About.css'
import about_img from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


function About() {
  return (
    <div id ="About" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={about_img} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left"><img src={profile_img} alt="" /></div>

            <div className="about-right">
                <div className="aboutpara">
                <p>I am a recent B.E. Computer Science Engineering graduate with skills in React.js for building responsive, user-friendly web applications and SQL for efficient database management. Passionate about creating dynamic front-end experiences and integrating them with structured data systems.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p><hr style ={{width:"40%"}} /></div>
                    <div className="about-skill"> <p>React js</p><hr style ={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style ={{width:"35%"}} /> </div>
                 <div className="about-skill"><p>Sql</p><hr style ={{width:"75%"}} /></div>
                </div>
            </div>
        </div>
     <div className="about-achievements">
            <div className="about-achievement"><h1>2 +</h1>
            <p>MONTH OF EXPERIENCE</p>
            </div><hr />
             <div className="about-achievement"><h1>2 + </h1>
            <p>PROJECTS COMPLETED</p>
            </div><hr  />
             <div className="about-achievement"><h1>2 + </h1>
            <p>HAPPY CLIENTS</p>
            </div>

        </div>
        </div>
  )
}

export default About