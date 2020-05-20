import React, { useState, useEffect, useContext } from 'react'
import TextField from '../common/TextField'
import UserContext from '../../context/user/userContext'

const Login = ({ history }) => {
  const userContext = useContext(UserContext)
  const { loginUser, isAuthenticated, errors } = userContext
  const [fields, setFields] = useState({ email: '', password: '' })

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [isAuthenticated])

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    loginUser(fields)
  }

  return (
    <div className='login-form my-2'>
      <h2 className='title-secondary'>Welcome Back</h2>

      <form className='form' onSubmit={onSubmit}>
        <TextField
          name='email'
          type='email'
          title='email'
          onChange={onChange}
          error={errors.email}
        />
        <TextField
          name='password'
          type='password'
          title='password'
          onChange={onChange}
          error={errors.password}
        />
        <button className='btn'>Login</button>
      </form>
      <div className='login-form__footer'>
        <small>Forgot your Password?</small>
      </div>
    </div>
  )
}

export default Login
