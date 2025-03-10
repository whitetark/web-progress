import React from 'react'
import styles from './TableRender.module.css'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const TableRender = (props) => {
  let yearlyData = []

  const calculate = () => {
    let currentSavings = +props.arr.currentSavings
    const yearlyContribution = +props.arr.yearlyContribution
    const expectedReturn = +props.arr.expectedReturn / 100
    const duration = +props.arr.duration

    let investedCapital = currentSavings
    let totalInterest = 0

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      investedCapital += yearlyContribution
      totalInterest += yearlyInterest
      yearlyData.push({
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        totalInterest: formatter.format(totalInterest),
        investedCapital: formatter.format(investedCapital),
      })
    }
  }

  calculate()

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((iteration) => {
          return (
            <tr key={iteration.year}>
              <td>{iteration.year}</td>
              <td>{iteration.savingsEndOfYear}</td>
              <td>{iteration.yearlyInterest}</td>
              <td>{iteration.totalInterest}</td>
              <td>{iteration.investedCapital}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableRender
