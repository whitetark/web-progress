import React from 'react'
import styles from './Hero.module.scss'

const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <h1>{data.title}</h1>
      {data.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default Hero
