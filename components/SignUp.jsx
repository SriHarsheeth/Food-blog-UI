import React, { useRef } from 'react'
import axios from 'axios'
import {useNavigate}from 'react-router-dom'


const SignUp = () => {
  let name= useRef()
  let email= useRef()
  let password= useRef()
  let confirmpassword= useRef()
  
  let navigate=useNavigate()
 let handle=(e)=>{
  e.preventDefault()
  let data={
    name:name.current.value,
    email:email.current.value,
    password:password.current.value,
    confirmpassword:confirmpassword.current.value,
  }
  if(data.name && data.email && data.password && (data.confirmpassword===data.password))
  {
    axios.post('http://localhost:4000/signup',data)
    .then((res)=>{
      alert(res.data.message)
      navigate("/")
    })
  }
  else{
    alert("invalid data")
  }
 }
 
  return (
     

    <div className='signup-page '>

      <div className='signup-container w-75 shadow-lg mx-auto mt-5 d-flex justify-content-center border rounded-4  '>
        <div className='signup-container-left w-50 p-5 mt-2 d-flex justify-content-center'>
       
          <form className='form m-auto  ' onSubmit={handle}>
            <h1>Sign up</h1>
            <i className='bx bxs-user'></i><input type='text' name='name'  ref={name} placeholder=' Your Name ' className='abc outline-none outline-offset-none .shadow-none border-top-0  border-start-0 border-end-0 m-lg-2   ' required />
            <div ><i className='bx bxs-envelope' ></i><input name='email' ref={email} type='email' placeholder='Your Email' className='abc  border-top-0  border-start-0 border-end-0  m-lg-2 ' required /></div>
            <div>   <i className='bx bx-lock-alt'></i><input type='password' ref={password} name='password' placeholder='Your Password' className='abc border-top-0  border-start-0 border-end-0  m-lg-2' required/></div>
            <i className='bx bxs-lock-alt' ></i><input type='text' placeholder='Repeat Your Password' ref={confirmpassword} className='abc border-top-0  border-start-0 border-end-0  m-lg-2' />
            <div className='checkbox d-flex  mt-2 '>

              <input type='checkbox' className='checkbox mx-2 ' />
              <h6>I agree all statements in <a href='a'>Terms of service</a> </h6>
            </div>
            <button className='btn btn-primary d-flex justify-content-center mx-5 p-2 mt-3 w-25 rounded-1' >Register</button>
          </form>



        </div>
        <div className='signup-container-right w-50 p-5 d-grid  justify-content-center '  >
          <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg' alt='img' />
          <a className='hii  text-dark mx-auto mt-3' href='/'>I am already member</a>
        </div>

      </div>
    </div>

  )
}

export default SignUp