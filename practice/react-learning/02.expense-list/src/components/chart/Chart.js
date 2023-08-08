import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...valueArray)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          data={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
