import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
 

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
    //   console.log('from register',email,password);
      
     setLoading(true)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log('user', user);
    setLoading(false)
    navigate('/login')
    toast.success("Registration Successfull..")
  })
  .catch((error) => {
    const errorMessage = error.message;
   toast.error(errorMessage)
   setLoading(false)
  });

    }

  return (
    <div style={{marginTop:"20px"}}>
        <AuthForm 
           email={email} 
           setEmail={setEmail}
           password={password}
           setPassword={setPassword}
           submitHandler={submitHandler}
           loading={loading}
           />

      </div>
  )  
}

export default Register