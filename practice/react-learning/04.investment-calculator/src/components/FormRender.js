import React, { useState } from 'react'
import styles from './FormRender.module.css'

const FormRender = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  })

  const inputHandler = (identifier, value) => {
    switch (identifier) {
      case 'current':
        setUserInput((prevState) => {
          return { ...prevState, currentSavings: value }
        })
        break
      case 'yearly':
        setUserInput((prevState) => {
          return { ...prevState, yearlyContribution: value }
        })
        break
      case 'expected':
        setUserInput((prevState) => {
          return { ...prevState, expectedReturn: value }
        })
        break
      default:
        setUserInput((prevState) => {
          return { ...prevState, duration: value }
        })
        break
    }
  }

  const submitForm = (event) => {
    event.preventDefault()
    const data = {
      currentSavings: userInput.currentSavings,
      yearlyContribution: userInput.yearlyContribution,
      expectedReturn: userInput.expectedReturn,
      duration: userInput.duration,
    }
    props.onCalculate(data)

    setUserInput({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    })
  }

  const resetHandler = () => {
    props.onReset()
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
            onChange={(event) => inputHandler('current', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            min='0'
            step='1'
            onChange={(event) => inputHandler('yearly', event.target.value)}
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
            onChange={(event) => inputHandler('expected', event.target.value)}
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
