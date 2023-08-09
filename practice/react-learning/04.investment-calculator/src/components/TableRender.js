import React from 'react'
import styles from './TableRender.module.css'

const TableRender = (props) => {
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
        {props.arr.map((iteration) => {
          return (
            <tr key={iteration.year}>
              <td>{iteration.year}</td>
              <td>${iteration.savingsEndOfYear}</td>
              <td>${iteration.yearlyInterest}</td>
              <td>${iteration.totalInterest}</td>
              <td>${iteration.investedCapital}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableRender
