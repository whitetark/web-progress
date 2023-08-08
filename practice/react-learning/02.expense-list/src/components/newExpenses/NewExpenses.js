import React, { useState } from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const onSaveHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    }
    props.onAdd(expenseData)
  }

  const onCancelHandler = () => {
    setIsClicked(false)
  }

  const clickHandler = () => {
    setIsClicked(true)
  }

  return (
    <div className='new-expense'>
      {!isClicked ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSave={onSaveHandler} onCancel={onCancelHandler} />
      )}
    </div>
  )
}

export default NewExpenses
