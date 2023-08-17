import React, { useEffect, useState } from 'react'

import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'
import useRequest from './hooks/use-request'

function App() {
  const [tasks, setTasks] = useState([])
  const { isLoading, error, sendRequest: fetchTasks } = useRequest()

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = []

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
      }

      setTasks(loadedTasks)
    }

    fetchTasks(
      {
        url: 'https://react-learning-f58b2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      },
      transformTasks
    )
  }, [fetchTasks])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task))
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  )
}

export default App
