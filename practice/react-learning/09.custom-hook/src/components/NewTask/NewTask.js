import Section from '../UI/Section'
import TaskForm from './TaskForm'
import useRequest from '../../hooks/use-request'

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useRequest()

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://react-learning-f58b2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    )
  }

  const createTask = (taskText, data) => {
    const generatedId = data.name
    const createdTask = { id: generatedId, text: taskText }
    props.onAddTask(createdTask)
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask
