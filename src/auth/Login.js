import React, { useState } from 'react'
import AuthForm from './AuthForm' 

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
      console.log('from Loign',email,password);
    }

  return (
    <div style={{marginTop:"20px"}}>
        <AuthForm 
           email={email} 
           setEmail={setEmail}
           password={password}
           setPassword={setPassword}
           submitHandler={submitHandler}
           />

      </div>
  )  
}

export default Login