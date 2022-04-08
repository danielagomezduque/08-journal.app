import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
            <div>
        <h3 className='auth__title'>Register</h3>
        <form>
        <input
            type="text"
            placeholder= "Name"
            name="name"
            autoComplete='off'
            className='auth__input'
          />
          <input
            type="text"
            placeholder= "Email"
            name="email"
            autoComplete='off'
            className='auth__input'
          />
          <input
            type="password"
            placeholder= "Password"
            name="password"
            className='auth__input'
          />
          <input
            type="password2"
            placeholder= "Confirm password"
            name="password"
            className='auth__input'
          />
          <button
            type='submit'
            className="btn btn-primary"
          >
            Register
          </button>
          {/* <hr/> */}
          
          <Link 
            to="/auth/login"
            className='link mt-1'
          >
            Already registered?
          </Link>
        </form>
    </div>
    </div>
  )
}
