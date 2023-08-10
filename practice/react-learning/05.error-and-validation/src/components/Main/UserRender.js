import React from 'react'
import styles from './UserRender.module.css'

const UserRender = (props) => {
  return (
    <div className={styles.render}>
      {props.arr.map((user, index) => {
        return (
          <div key={index}>
            {user.username} ({user.age} years old)
          </div>
        )
      })}
    </div>
  )
}

export default UserRender
