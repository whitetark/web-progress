import styles from './App.module.scss'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'

function App() {
  return (
    <div className=''>
      <Header companyName='ReactMeals' />
      <Main />
    </div>
  )
}

export default App
