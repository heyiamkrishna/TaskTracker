import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-gray-300/35'>
      <div className='bg-white drop-shadow-lg h-[30em] w-[30vw] rounded-3xl'>
        <div className='flex flex-col justify-center items-center h-32 mt-4 w-full'>
          <h1 className='text-3xl opacity-75 font-semibold'>Sign Up</h1>
          <h4 className='mt-4  text-gray-800 opacity-75'>Let's get start with your 30 days trial</h4>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <form action=""  className='flex flex-col justify-center items-center gap-4 '>
          <TextField  required type="name" id="outlined-basic" size="small" style={{width:'20rem'}}  label="name" variant="outlined" />
          <TextField required type="email" id="outlined-basic" size="small" style={{width:'20rem'}}  label="email " variant="outlined" />
          <TextField required type="password" id="outlined-basic" size="small" style={{width:'20rem'}}  label="Passcode" variant="outlined" />
          <button className='w-full mt-2 text-white bg-gray-800 rounded-lg py-2'>Submit Now</button>
          <div className='flex items-center gap-2'>
          <h4 className='opacity-75'>already have an account?</h4>
          <Link to={'/'} className='text-indigo-800' href="">Log in</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
