import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
 let navigate= useNavigate()
  let email=useRef()
  let password=useRef()
  let handlelogin=(e)=>{
    
    e.preventDefault()
    let data= {
      email:email.current.value,
      password:password.current.value
    }
    axios.post('http://localhost:4000/signin',data)
    .then((res)=>{ alert(res.data.message)
      if(res.data.message === "login Successfull")
      {
        navigate('/home')
      }
    })
    

  }
  return (
    <div className='signup-page '>

    <div className='signup-container w-75 shadow-lg mx-auto mt-5 d-flex  flex-row-reverse justify-content-center border rounded-4  '>
      <div className='signup-container-left w-50   d-flex justify-content-center'>
     
        <form className='form m-auto' onSubmit={handlelogin}>
          <h1>Login</h1>
          <i className='bx bxs-user'></i><input type='email' name='email'  ref={email} placeholder=' Your Email ' className='abc outline-none outline-offset-none .shadow-none border-top-0  border-start-0 border-end-0 m-lg-2   ' />
          
          <div>   <i className='bx bx-lock-alt'></i><input  name='password' ref={password} type='password' placeholder='Your Password' className='abc border-top-0  border-start-0 border-end-0  m-lg-2' /></div>
         
          <div className='checkbox d-flex  mt-2 '>

            <input type='checkbox' className='checkbox mx-2 ' />
            <h6>Remember Me </h6>
          </div>
          <button className='btn btn-primary d-flex justify-content-center mx-5 p-2 mt-3 w-50 rounded-1' >Log in</button>
          <div>
        <h5 className='h mt-3'>or login with <i className='bx bxl-facebook-square mx-1 ' style={{color:'#001e74'}}  ></i> <i className='bx bxl-twitter' style={{color:'rgba(65,142,210,0.55)'}} ></i> <i className='bx bxl-google-plus-circle' style={{color:'#a81816'}}  ></i></h5> 
      </div>
        </form>
      



      </div>
      <div className='signup-container-right w-50 p-5 d-grid  justify-content-center '  >
        <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt='img' />
        <a className='hii  text-dark mx-auto mt-3' href='/signup'>Create an account</a>
      </div>
     

    </div>
  </div>
  )
}

export default Login