import React from 'react'

const Register = () => {
  return (
    <div className="container my-5 card shadow w-50">
      <h1 className="text-center border-bottom border-success">Register</h1>
      <form action="" className='container'>
       <div className="row my-5">
        <div className="col col-sm-4">
          <label htmlFor="">Name</label>
        </div>
        <div className="col col-sm-8">
        <input type="text" className="form-control"placeholder='Enter Your Name' />
        </div>
       </div>
       <div className="row my-5">
        <div className="col col-sm-4">
          <label htmlFor="">Contact</label>
        </div>
        <div className="col col-sm-8">
        <input type="text" className="form-control"placeholder='Enter Your Contact Number' />
        </div>
       </div>
       <div className="row my-5">
        <div className="col col-sm-4">
          <label htmlFor="">Email</label>
        </div>
        <div className="col col-sm-8">
        <input type="text" className="form-control"placeholder='Enter Your Email' />
        </div>
       </div>
       <div className="row my-5">
        <div className="col col-sm-4">
          <label htmlFor="">Password</label>
        </div>
        <div className="col col-sm-8">
        <input type="text" className="form-control"placeholder='Enter Your Password' />
        </div>
       </div>
       <div className=" my-3 text-center">
        <button className='btn btn-primary'>Submit</button>
       </div>
      </form>
    </div>
  )
}

export default Register