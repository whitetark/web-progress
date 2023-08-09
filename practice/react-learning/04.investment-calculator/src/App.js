import logo from './assets/investment-calculator-logo.png'
import Header from './components/Header'
import FormRender from './components/FormRender'
import TableRender from './components/TableRender'
import { useState } from 'react'

function App() {
  const [isTableShown, setIsTableShown] = useState(false)
  const [resultData, setResultData] = useState([{}])

  const calculateHandler = (userInput) => {
    const yearlyData = []

    let currentSavings = +userInput.currentSavings
    const yearlyContribution = +userInput.yearlyContribution
    const expectedReturn = +userInput.expectedReturn / 100
    const duration = +userInput.duration

    let investedCapital = currentSavings
    let totalInterest = 0

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      investedCapital += yearlyContribution
      totalInterest += yearlyInterest
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital,
      })
    }

    setIsTableShown(true)
    setResultData(yearlyData)
  }

  const resetHandler = () => {
    setIsTableShown(false)
  }

  return (
    <div>
      <Header logo={logo} title='Investment Calculator' />
      <FormRender onCalculate={calculateHandler} onReset={resetHandler} />
      {isTableShown ? <TableRender arr={resultData} /> : <p>No investment calculated yet.</p>}
    </div>
  )
}

export default App
