import React, { useState } from 'react'

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import styles from './App.module.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ])

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      return updatedGoals
    })
  }

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId)
    })
  }

  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  }

  return (
    <div>
      <section id={styles['goal-form']}>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id={styles.goals}>{content}</section>
    </div>
  )
}

export default App
