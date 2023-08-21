import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

const Auth = () => {
  const isAuth = useSelector((state)=>state.auth.isAuth)
  const dispatch = useDispatch();
  const loginHandler = ()=>{
    dispatch(counterActions.login());
  }

  const logoutHandler = ()=>{
    dispatch(counterActions.logout());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
