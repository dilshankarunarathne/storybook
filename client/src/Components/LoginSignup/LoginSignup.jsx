import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'

//import user_icon from '../Assests/person.png'
//import email_icon from '../Assests/email.png'
//import password_icon from '../Assests/password.png'

const LoginSignup = () => {
  return (
    <div className='container'>
      <h1>Login form</h1>
      <button><Link to="./HeaderArea/HeaderArea">LogIn</Link>
      </button>

    </div>
  )
}

export default LoginSignup