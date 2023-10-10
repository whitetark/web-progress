import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredValue, setEnteredValue] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })
  // const titleChangeHandler = (event) => setEnteredTitle(event.target.value)
  // const valueChangeHandler = (event) => setEnteredValue(event.target.value)
  // const dateChangeHandler = (event) => setEnteredDate(event.target.date)
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // })
  //If your state depends on the previous state
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value }
  // })

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value)
    } else if (identifier === 'date') {
      setEnteredDate(value)
    } else {
      setEnteredValue(value)
    }
  }

  const cancelHandler = () => props.onCancel()

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredValue,
      date: new Date(enteredDate),
    }

    props.onSave(expenseData)
    //Two-Way Binding
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredValue('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={(event) => inputChangeHandler('title', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredValue}
            onChange={(event) => inputChangeHandler('value', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
