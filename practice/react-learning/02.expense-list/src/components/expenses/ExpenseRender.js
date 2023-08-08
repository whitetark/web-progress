import React, { useState } from 'react'
import Card from '../ui/Card'
import './ExpenseRender.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'

const ExpenseRender = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const expenses = props.arr.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )
  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear)

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter arr={expenses} onChange={filterChangeHandler} selected={filteredYear} />
        <ExpenseList arr={expenses} />
      </Card>
    </li>
  )
}

export default ExpenseRender
