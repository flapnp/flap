import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from 'reactstrap';
import Flap from '../assets/image/flapp.png';
import '../assets/css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupComponent = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{ email, password})
    .then(res=> {
      if (res.data.Status === "sucess") {
        if (res.data.role === "admin") {
            navigate('/admin');
        } 
        else if (res.data.role === "super-admin") {
            navigate('/super-admin');
        } 
        else {
            navigate('/user');
        }
    }
    }).catch(err=>console.log(err))
  }
  return (
    <>
    <div >
    <Container>
      <div className='login'>
        <div >
          <img className='sl-img' src={Flap} alt='flap' />
        </div>
        <div className='login-form'>
        <form onSubmit={handleSubmit}>
            <h3 align="center" style={{fontWeight:'800', 
            color:'#1a4789'}}>Login</h3>
            <TextField
              required
              id="email"
              label="Email"
              variant="standard"
              className='login-form-field'
              onChange={(e)=> setEmail(e.target.value)}
            /><br />
            <TextField
              required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              className='login-form-field'
              onChange={(e)=> setPassword(e.target.value)}
            /><br />
            <Button className='sl-button' variant="contained" type="submit" >
              Login
            </Button>
          </form>
          <br/>
          <span className='dont-have'> Don't have an account?  <Link to='/signup'>Sign Up</Link></span>
        </div>
      </div>
    </Container>
      </div>
    </>

  );
};

export default SignupComponent;
