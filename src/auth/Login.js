import React, { useState } from 'react'
import AuthForm from './AuthForm' 
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/slices/AuthSlice';
import Loader from '../components/loaders/Loader';
import {selectedpreferences } from '../redux/slices/PreferenceSlice';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [preferences, setPreferences] = useState([]);

    const navigate= useNavigate()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

         dispatch(isLoggedIn(true))
         console.log("user");
         toast.success("Loggedin Successfully")
         setLoading(false)
         navigate('/')
        //  dispatch(selectedpreferences(preferences))
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
      <Loader open={loading} />
        <AuthForm 
           email={email} 
           setEmail={setEmail}
           password={password}
           setPassword={setPassword}
           submitHandler={submitHandler}
           loading={loading}
           preferences={preferences}
           setPreferences={setPreferences}
           />

      </div>
  )  
}

export default Login