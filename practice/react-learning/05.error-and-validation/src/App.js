import React, { useState } from 'react'
import styles from './App.module.css'
import UserForm from './components/Main/UserForm'
import UserRender from './components/Main/UserRender'
import ErrorWrapper from './components/UI/ErrorWrapper'

const initialError = {
  isError: false,
  reason: '',
}

function App() {
  const [userList, setUserList] = useState([])
  const [error, setError] = useState(initialError)

  const addUser = (data) => setUserList((prevState) => [data, ...prevState])
  const errorHandle = (log) => setError(log)
  const errorCloseHandle = () => setError(initialError)

  return (
    <React.Fragment>
      {error.isError && <ErrorWrapper reason={error.reason} onClose={errorCloseHandle} />}
      <div className={styles.userSection}>
        <UserForm onAdd={addUser} onError={errorHandle} />
        {userList.length() > 0 && <UserRender arr={userList} />}
      </div>
    </React.Fragment>
  )
}

export default App
