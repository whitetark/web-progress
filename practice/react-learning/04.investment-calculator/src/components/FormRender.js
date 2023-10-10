import React, { useState } from 'react'
import styles from './FormRender.module.css'

const initialUserInput = {
  currentSavings: '',
  yearlyContribution: '',
  expectedReturn: '',
  duration: '',
}

const FormRender = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput)

  const inputHandler = (identifier, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: value,
      }
    })
  }

  const submitForm = (event) => {
    event.preventDefault()
    props.onCalculate(userInput)

    setUserInput(initialUserInput)
  }

  const resetHandler = () => {
    setUserInput(initialUserInput)
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput.currentSavings}
            min='0'
            step='1'
            onChange={(event) => inputHandler('currentSavings', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            min='0'
            step='1'
            onChange={(event) => inputHandler('yearlyContribution', event.target.value)}
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>Expected Interest (%, per year)</label>
          <input
            type='number'
            id='expected-return'
            value={userInput.expectedReturn}
            step='1'
            onChange={(event) => inputHandler('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput.duration}
            min='0'
            step='1'
            onChange={(event) => inputHandler('duration', event.target.value)}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button onClick={resetHandler} type='reset' className={styles.buttonAlt}>
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default FormRender
