import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container-fluid navbar-dark bg-dark rounded shadow navbarr">
        <div className="row">
          <div className="col col-sm-5">
            <h1 className='text-light'>Logo</h1>
          </div>
          <div className="col col-sm-7 d-flex justify-content-between align-items-center">
                <Link to='/home'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar