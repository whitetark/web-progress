import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { useEffect } from 'react'
import { uiActions } from './store/ui'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cartIsShown = useSelector((state) => state.isShown)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      )
      const response = await fetch(
        'https://react-learning-f58b2-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      )
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message || 'Something went wrong!',
        })
      )
    })
  }, [cart, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
