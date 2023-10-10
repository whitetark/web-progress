import classes from './CartButton.module.css'

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.amount}</span>
    </button>
  )
}

export default CartButton
