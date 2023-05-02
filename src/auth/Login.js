import React, { useState } from 'react'
import AuthForm from './AuthForm' 
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/slices/AuthSlice';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate= useNavigate()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const user = userCredential.user;
         dispatch(isLoggedIn(true))
         console.log("user");
         toast.success("Loggedin Successfully")
         setLoading(false)
         navigate('/')
         dispatch(isLoggedIn(true))
      })
        .catch((error) => {
         const errorMessage = error.message;
         setLoading(false)
         toast.error(errorMessage)
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

export default Login