import { cartActions } from '../../store/cart'
import CartButton from '../Cart/CartButton'
import classes from './MainHeader.module.css'
import { useDispatch, useSelector } from 'react-redux'

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.items)
  let amount = 0

  const cartShownHandler = () => {
    dispatch(cartActions.toggleIsShown())
  }

  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      amount += item.amount
    })
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton amount={amount} onClick={cartShownHandler} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader