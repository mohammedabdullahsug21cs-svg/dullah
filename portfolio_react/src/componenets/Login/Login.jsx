import React from 'react'
import "./login.css"
function Login() {

  return (<>
  <div className="login"> 
    <h1>User login</h1>
    <div className="loginpage"> <input type = "text" placeholder="Enter your Username" /><br />
     <input type ="number" placeholder='password' />   
    </div>
    <button type ="submit" className="btn">Login</button>
  </div>
  </>
    
  )
}

export default Login