import React from 'react'
import styles from './UserRender.module.css'
import Card from '../UI/Card'

const UserRender = ({ arr }) => {
  return (
    <Card className={styles.render}>
      {arr.map((user, index) => {
        return (
          <div key={index}>
            {user.username} ({user.age} years old)
          </div>
        )
      })}
    </Card>
  )
}

export default UserRender
