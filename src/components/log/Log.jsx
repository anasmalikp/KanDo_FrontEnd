import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginUser } from '../../services/Auth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-no-background.png';

const Log = () => {
  const [User, setUser] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await LoginUser(User)
    if(response == null){
      alert("something went wrong")
    } else{
      Cookies.set('token', response.token)
      navigate('/home')
    }
  }

  return (
    <>
      <div className="reg_main">
      <div className='reg_logo'>
              <section className='img_logo'>
              <img src={logo} width='300px' />
              </section>
            </div>
            <div className='reg_form'>
                <form className='reg_formcont' onSubmit={handleSubmit} >
                <TextField onChange={e=> setUser({...User, email:e.target.value})} className='textfld' id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField onChange={e=> setUser({...User, password:e.target.value})} className='textfld' id="outlined-basic" label="Password" type='password' variant="outlined" />
                <Button type='submit' variant="contained">Sign In</Button>
                <p onClick={()=> navigate('/register')}>Don't have an Account? Click Here</p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Log