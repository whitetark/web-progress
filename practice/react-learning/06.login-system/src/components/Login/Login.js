import React, { useState, useEffect, useReducer, useContext, useRef } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'
import Input from '../UI/Input/Input'

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = () => {
  const authCtx = useContext(AuthContext)

  const [formIsValid, setFormIsValid] = useState(false)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  })

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) =>
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  const passwordChangeHandler = (event) =>
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })

  const validateEmailHandler = () => dispatchEmail({ type: 'INPUT_BLUR' })
  const validatePasswordHandler = () => dispatchPassword({ type: 'INPUT_BLUR' })

  const submitHandler = (event) => {
    event.preventDefault()
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailState.isValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailState.isValid}
          type='email'
          value={emailState.value}
          label='E-Mail'
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          type='password'
          value={passwordState.value}
          label='Password'
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
