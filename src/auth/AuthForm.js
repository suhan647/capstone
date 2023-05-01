import { Backdrop, Button, CircularProgress, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const styles = {
  paper: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
     marginBottom: '10px',
  },
  button: {
    marginTop: '20px',
  },
};

function AuthForm(props) {

  const [showPassword, setShowPassword] = useState(false);

  const {email,setEmail,password,setPassword,submitHandler} = props

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const path = useLocation()
  const toggle = path.pathname

  return (
    <>
    <div  className='mt' style={{marginTop:"120px"}}>
    <Paper style={styles.paper}>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <span style={{color:'green'}}>{toggle === "/register" ? <h2>New User? Register Here</h2> : <h1>Login</h1>}</span>
      </Box>
      <form onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              type='email'
              required
              fullWidth
              style={styles.textField}
              value={email}
              onChange={(e)=> {setEmail(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12}>

             <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            type={showPassword ? 'text' : 'password'}
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={styles.button}
              type='submit'
            >
              Register
            </Button>
           <Box sx={{mt:'20px',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
           <Button sx={{backgroundColor:"red", color:"white",marginRight:'15px'}}><GoogleIcon/>SignUp with Google</Button>
           <Box>
            <NavLink to='/login' className='textdecoration'>
                {toggle === '/register' ?  <small style={{color:'blue', cursor:'pointer'}}>Already Registered? <b>Login!</b></small> : "" }
           
            </NavLink>
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

export default AuthForm