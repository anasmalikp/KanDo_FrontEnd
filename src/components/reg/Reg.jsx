import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Reg.css';
import { RegisterUser } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-no-background.png';

const Reg = () => {
  const [User, setUser] = useState({})
  const [cnfrmpass, setCnfrmpass] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preverntDefault()
    if(User.password == cnfrmpass){
      const response = await RegisterUser(User)
      if(response == 200){
        navigate('/')
      } else{
        alert("something went wrong")
      }
    } else{
      alert("Password did not match")
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
                <TextField onChange={e=> setUser({...User, username:e.target.value})} className='textfld' id="outlined-basic" label="User Name" variant="outlined" />
                <TextField onChange={e=> setUser({...User, email:e.target.value})} className='textfld' id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField onChange={e=> setUser({...User, phone:e.target.value})} className='textfld' id="outlined-basic" label="Phone" variant="outlined" />
                <TextField onChange={e=> setUser({...User, password:e.target.value})} className='textfld' id="outlined-basic" label="Password" type='password' variant="outlined" />
                <TextField onChange={e=> setCnfrmpass(e.target.value)} className='textfld' id="outlined-basic" label="Confirm Password" type='password' variant="outlined" />
                <Button type='submit' variant="contained">Sign Up</Button>
                <p onClick={()=> navigate('/')}>Already have an Account? Click here</p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Reg