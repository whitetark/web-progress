import { useState } from 'react'
import ExpenseRender from './components/expenses/ExpenseRender'
import NewExpenses from './components/newExpenses/NewExpenses'

const startExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(startExpenses)
  const addExpenseHandler = (expense) => setExpenses((prevState) => [expense, ...prevState])

  return (
    <div>
      <NewExpenses onAdd={addExpenseHandler} />
      <ExpenseRender arr={expenses} />
    </div>
  )
}

export default App
