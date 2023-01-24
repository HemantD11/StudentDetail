import React,{useState} from 'react'
import './Form.css'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail]=useState('')
  const [psw, setpsw]=useState('')
  let Navigate=useNavigate()
  let handleSubmit=(e)=>{
    e.preventDefault()
    if(email==='hemant1@gmail.com' && psw==='123'){
      Navigate('/home')
    }
    else{
      alert('Invalid Email/Password')
    }
  }
  return (
    <div className="container my-5 border card shadow login w-50">
      <h1 className='text-center border-bottom border-success'>Login</h1>
      <form className=''>
        <div className='row my-5'>
          <div className="col col-sm-5 text-center">
            <label htmlFor="">Email</label>
          </div>
          <div className="col col-sm-7">
            <input type="text" className="form-control w-75" placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)} /> 
          </div>
        </div>
        <div className='row my-5'>
          <div className="col col-sm-5 text-center">
            <label htmlFor="">Password</label>
          </div>
          <div className="col col-sm-7">
            <input type="password" className="form-control w-75" placeholder='Enter Your Password' onChange={e=>setpsw(e.target.value)} /> 
          </div>
        </div>
        <div className="my-3 text-center">
          <button className="btn btn-primary " onClick={(e)=>handleSubmit(e)}>Login</button>
        </div>
        <div className='text-center my-3'>
          <Link className=' text-primary' to='/register'>Sign-Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login