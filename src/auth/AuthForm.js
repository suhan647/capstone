// import {
//   Button,
//   FormControl,
//   Grid,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   Paper,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
// import { Box } from "@mui/system";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Loader from "../components/loaders/Loader";
// import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
// import { auth } from "../firebase/Config";
// import { toast } from "react-toastify";
// import { isLoggedIn } from "../redux/slices/AuthSlice";
// import { useDispatch } from "react-redux";

// const styles = {
//   paper: {
//     padding: "20px",
//     maxWidth: "400px",
//     margin: "auto",
//   },
//   textField: {
//     marginBottom: "10px",
//   },
//   button: {
//     marginTop: "20px",
//   },
// };

// function AuthForm(props) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [load, setLoad] = useState(false)

//   const { email, setEmail, password, setPassword, submitHandler } =
//     props;

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const path = useLocation();
//   const toggle = path.pathname;
//   const navigate = useNavigate()
//   const dispatch=useDispatch()

//   const provider = new GoogleAuthProvider();

//   const LoginwithGoogle = () =>{
    
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     setLoad(true)
//     toast.success("Login successFul")
//     navigate('/')
//     dispatch(isLoggedIn(true))
//     setLoad(false)
//   }).catch((error) => {
//     setLoad(true)
//    toast.error(error.message)
//    setLoad(false)
//   });   
//   }

//   return (
//     <>
//       <Loader  open={load}/>
//       <div className="mt" style={{ marginTop: "120px" }}>
//         <Paper style={styles.paper}>
//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <span style={{ color: "green" }}>
//               {toggle === "/register" ? (
//                 <h2>New User? Register Now</h2>
//               ) : (
//                 <h1>Login</h1>
//               )}
//             </span>
//           </Box>
//           <form onSubmit={submitHandler}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Email Address"
//                   variant="outlined"
//                   type="email"
//                   required
//                   fullWidth
//                   style={styles.textField}
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel htmlFor="outlined-adornment-password">
//                     Password
//                   </InputLabel>
//                   <OutlinedInput
//                     id="outlined-adornment-password"
//                     required
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                     type={showPassword ? "text" : "password"}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     label="Password"
//                   />
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   style={styles.button}
//                   type="submit"
//                 >
//                   {toggle === "/register" ? "Register" : "Login"}
//                 </Button>
//                 <Box
//                   sx={{
//                     mt: "20px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Button
//                   onClick={LoginwithGoogle}
//                     sx={{
//                       backgroundColor: "red",
//                       color: "white",
//                       marginRight: "15px",
//                     }}
//                   >
//                     <GoogleIcon />
//                     SignUp with Google
//                   </Button>
//                   <Box>
//                     {toggle === "/register" ? (
//                       <NavLink to="/login" className="textdecoration">
//                         <small style={{ color: "blue", cursor: "pointer" }}>
//                           Already Registered? <b>Login!</b>
//                         </small>
//                       </NavLink>
//                     ) : (
//                       <NavLink to="/register" className="textdecoration">
//                         <small style={{ color: "blue", cursor: "pointer" }}>
//                           New User? <b>Register here!</b>
//                         </small>
//                       </NavLink>
//                     )}
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </div>
//     </>
//   );
// }

// export default AuthForm;

import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Loader from "../components/loaders/Loader";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebase/Config";
import { toast } from "react-toastify";
import { isLoggedIn } from "../redux/slices/AuthSlice";
import {selectedpreferences } from '../redux/slices/PreferenceSlice';
import { useDispatch } from "react-redux";
import apiService from "../services/apiService";


const styles = {
  paper: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
  textField: {
    marginBottom: "10px",
  },
  button: {
    marginTop: "20px",
  },
};

function AuthForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [load, setLoad] = useState(false);
  // const [preferences, setPreferences] = useState([]);
  const [preferencesList, setPreferencesList] = useState([])

  const getPreferences = async() => {
    try {
      let data = await apiService.get('/products/categories')
      setPreferencesList(data.data)
      // console.log('data', data.data);
     } catch (error) {
      toast.error(error)
      console.log(error);
     }
  }

  const { email, setEmail, password, setPassword, submitHandler, setPreferences, preferences } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePreferencesChange = (event) => {
    setPreferences(event.target.value);
  };

  console.log(preferences);

  const path = useLocation();
  const toggle = path.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getPreferences()
    // dispatch(selectedpreferences(preferences))
   },[preferences])

  const provider = new GoogleAuthProvider();

  const LoginwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoad(true);
        toast.success("Login successFul");
        navigate("/");
        dispatch(isLoggedIn(true));
        setLoad(false);
      })
      .catch((error) => {
        setLoad(true);
        toast.error(error.message);
        setLoad(false);
      });
  };

  const location = useLocation();
 

  return (
    <>
      <Loader open={load} />
      <div className="mt" style={{ marginTop: "120px" }}>
        <Paper style={styles.paper}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <span style={{ color: "green" }}>
              {toggle === "/register" ? (
                <h2>New User? Register Now</h2>
              ) : (
                <h1>Login</h1>
              )}
            </span>
          </Box>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  style={styles.textField}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>

              {location.pathname === '/register' ? 
              <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="preferences">Preferences</InputLabel>
                <Select
                  id="preferences"
                  multiple
                  value={preferences}
                  onChange={(e) => handlePreferencesChange(e)}
                  input={<OutlinedInput label="Preferences" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {preferencesList.map((preference) => (
                    <MenuItem key={preference} value={preference}>
                      <Checkbox checked={preferences.indexOf(preference) > -1} />
                      <ListItemText primary={preference} />
                    </MenuItem>
                  ))}
                  
                </Select>
              </FormControl>
            </Grid>
               :
               " "
              
              }

              

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={styles.button}
                  type="submit"
                >
                  {toggle === "/register" ? "Register" : "Login"}
                </Button>
                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                  onClick={LoginwithGoogle}
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      marginRight: "15px",
                    }}
                  >
                    <GoogleIcon />
                    SignUp with Google
                  </Button>
                  <Box>
                    {toggle === "/register" ? (
                      <NavLink to="/login" className="textdecoration">
                        <small style={{ color: "blue", cursor: "pointer" }}>
                          Already Registered? <b>Login!</b>
                        </small>
                      </NavLink>
                    ) : (
                      <NavLink to="/register" className="textdecoration">
                        <small style={{ color: "blue", cursor: "pointer" }}>
                          New User? <b>Register here!</b>
                        </small>
                      </NavLink>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </>
  )
}    

export default AuthForm;