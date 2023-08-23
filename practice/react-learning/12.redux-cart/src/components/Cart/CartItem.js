import { useDispatch } from 'react-redux'
import classes from './CartItem.module.css'
import cart, { cartActions } from '../../store/cart'

const CartItem = (props) => {
  const { id, title, price, description, amount } = props.item
  const dispatch = useDispatch()
  console.log(props.item)
  const totalPrice = amount * price
  const minusHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }
  const plusHandler = () => {
    dispatch(cartActions.addItemToCart(props.item))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
