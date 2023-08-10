import { useState } from 'react'
import styles from './App.module.css'
import UserForm from './components/Main/UserForm'
import UserRender from './components/Main/UserRender'
import ErrorWrapper from './components/UI/ErrorWrapper'

const initialError = {
  isError: false,
  reason: '',
}

function App() {
  const [userList, setUserList] = useState(null)
  const [error, setError] = useState(initialError)

  const addUser = (data) => {
    if (userList) {
      setUserList((prevState) => [data, ...prevState])
    } else {
      setUserList([data])
    }
  }
  const errorHandle = (log) => setError(log)
  const errorCloseHandle = () => setError(initialError)

  return (
    <div>
      {error.isError && <ErrorWrapper reason={error.reason} onClose={errorCloseHandle} />}
      <div className={styles.userSection}>
        <UserForm onAdd={addUser} onError={errorHandle} />
        {userList && <UserRender arr={userList} />}
      </div>
    </div>
  )
}

export default App
