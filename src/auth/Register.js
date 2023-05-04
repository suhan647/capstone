import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Config'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loaders/Loader';
import {selectedpreferences } from '../redux/slices/PreferenceSlice';
import { useDispatch } from 'react-redux';
 

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [preferences, setPreferences] = useState([]);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
      
     setLoading(true)
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log('user', user);
    setLoading(false)
    navigate('/login')
    toast.success("Registration Successfull..")
    dispatch(selectedpreferences(preferences))
  })
  .catch((error) => {
    const errorMessage = error.message;
   toast.error(errorMessage)
   setLoading(false)
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

export default Register