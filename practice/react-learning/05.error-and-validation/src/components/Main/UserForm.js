import React, { useState } from 'react'
import styles from './UserForm.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'

const initialUserInput = {
  username: '',
  age: '',
}

const UserForm = ({ onError, onAdd }) => {
  const [userInput, setUserInput] = useState(initialUserInput)

  const inputHandle = (identifier, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      }
    })
  }

  const submitHandle = (event) => {
    event.preventDefault()
    const result = formValidation(userInput)
    result.isError ? onError(result) : onAdd(userInput)
    setUserInput(initialUserInput)
  }

  const formValidation = (user) => {
    let result = {}
    if (user.age < 0) {
      result = {
        isError: true,
        reason: 'Age must be greater than zero',
      }
    } else if (user.age === '') {
      result = {
        isError: true,
        reason: 'Age cannot be empty',
      }
    } else if (user.username === '') {
      result = {
        isError: true,
        reason: 'Username cannot be empty',
      }
    } else {
      result = {
        isError: false,
      }
    }

    return result
  }

  return (
    <Card className={styles['form-card']}>
      <form className={styles.form} onSubmit={submitHandle}>
        <div className={styles.formContainer}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            autoComplete='off'
            onChange={(event) => inputHandle('username', event.target.value)}
            value={userInput.username}
          />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            name='age'
            step='1'
            autoComplete='off'
            onChange={(event) => inputHandle('age', event.target.value)}
            value={userInput.age}
          />
        </div>
        <div className={styles.formContainer}>
          <Button type='submit'>Add User</Button>
        </div>
      </form>
    </Card>
  )
}

export default UserForm
