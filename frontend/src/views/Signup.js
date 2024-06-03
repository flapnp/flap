import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from 'reactstrap';
import Flap from '../flap-blue.jpg';
import '../assets/css/style.css';
import axios from 'axios';

const SignupComponent = () => {
  const [firstname,setFirstName]=useState();
  const [middlename,setMiddleName]=useState();
  const [lastname,setLastName]=useState();
  const [phone,setPhone]=useState();
  const [organization,setOrganization]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [username,setUsername]=useState();

  // const [confirmpassword,setConfirmPassword]=useState();
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{firstname, middlename, lastname, username, phone, organization, email, password})
    .then(res=> {
      alert('Regirtered')
      navigate('/login')
    })
    .catch(err => {
      console.log(err);
      alert('Username already exists. Try another Username.');
  });
  }
  return (
    <Container>
    <div className='reg'>
        <img className='reg-img' src={Flap} alt='flap' />
      <div className='reg-form'>
      <form onSubmit= {handleSubmit}>
          <h3 align="center" style={{fontWeight:'800', 
          color:'#1a4789'}}>Sign Up</h3>
          <TextField
            required
            id="firstname"
            label="First Name"
            variant="standard"
            fullWidth
            onChange={(e)=> setFirstName(e.target.value)}
          /><br />
          <TextField
            required
            id="middlename"
            label="Middle Name"
            variant="standard"
            fullWidth
            onChange={(e)=> setMiddleName(e.target.value)}
          /><br />
          <TextField
            required
            id="lastname"
            label="Last Name"
            variant="standard"
            fullWidth
            onChange={(e)=> setLastName(e.target.value)}
          /><br />
          <TextField
            required
            id="username"
            label="Username"
            variant="standard"
            fullWidth
            onChange={(e)=> setUsername(e.target.value)}
          /><br />
          <TextField
            required
            id="phone"
            label="Phone"
            variant="standard"
            fullWidth
            onChange={(e)=> setPhone(e.target.value)}
          /><br />
          <TextField
            required
            id="orgname"
            label="Organization b"
            variant="standard"
            fullWidth
            onChange={(e)=> setOrganization(e.target.value)}
          /><br />
          <TextField
            required
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            onChange={(e)=> setEmail(e.target.value)}
          /><br />
            <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            onChange={(e)=> setPassword(e.target.value)}
          /><br />
          {/* <TextField
            required
            id="confirmpassword"
            label="Confirm Password"
            variant="standard"
            fullWidth
            onChange={(e)=> setConfirmPassword(e.target.value)}
          /><br /> */}

        <br/>
          <Button  variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </form>
        <br/>
        <span className='dont-have'> Already have an account? <Link to='/login'>Login</Link></span>
      </div>
    </div>
  </Container>
  );
};

export default SignupComponent;
