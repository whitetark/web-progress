import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter =  useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  const incrementHandler = (value) => {
    dispatch(counterActions.increment(value))
  }

  const decrementHandler = (value) => {
    dispatch(counterActions.decrement(value))

  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {showCounter && <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increase By 5</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
      </div>}
    </main>
  );
};

export default Counter;
