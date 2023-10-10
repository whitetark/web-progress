import React, { useRef } from 'react'
import styles from './UserForm.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'

const UserForm = ({ onError, onAdd }) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const submitHandle = (event) => {
    event.preventDefault()
    const userInput = {
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    }
    const result = formValidation(userInput)
    result.isError ? onError(result) : onAdd(userInput)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const formValidation = (user) => {
    let result = {}
    if (user.age < 0) {
      result = {
        isError: true,
        reason: 'Age must be greater than zero',
      }
    } else if (user.age === '' || user.username === '') {
      result = {
        isError: true,
        reason: 'Fields cannot be empty',
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
          <input type='text' name='username' autoComplete='off' ref={nameInputRef} />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' name='age' step='1' autoComplete='off' ref={ageInputRef} />
        </div>
        <div className={styles.formContainer}>
          <Button type='submit'>Add User</Button>
        </div>
      </form>
    </Card>
  )
}

export default UserForm
