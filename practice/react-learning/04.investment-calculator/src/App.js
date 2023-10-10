import logo from './assets/investment-calculator-logo.png'
import Header from './components/Header'
import FormRender from './components/FormRender'
import TableRender from './components/TableRender'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [yearlyData, setYearlyData] = useState(null)

  const calculateHandler = (userInput) => {
    setYearlyData(userInput)
  }

  return (
    <div className={styles.container}>
      <Header logo={logo} title='Investment Calculator' />
      <FormRender onCalculate={calculateHandler} />
      {yearlyData ? <TableRender arr={yearlyData} /> : <p>No investment calculated yet.</p>}
    </div>
  )
}

export default App
