import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Reg.css';

const Reg = () => {
  return (
    <>
        <div className="reg_main">
            <div className='reg_logo'>LOGO HERE</div>
            <div className='reg_form'>
                <form className='reg_formcont'>
                <TextField className='textfld' id="outlined-basic" label="User Name" variant="outlined" />
                <TextField className='textfld' id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField className='textfld' id="outlined-basic" label="Phone" variant="outlined" />
                <TextField className='textfld' id="outlined-basic" label="Password" type='password' variant="outlined" />
                <TextField className='textfld' id="outlined-basic" label="Confirm Password" type='password' variant="outlined" />
                <Button variant="contained">Sign Up</Button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Reg