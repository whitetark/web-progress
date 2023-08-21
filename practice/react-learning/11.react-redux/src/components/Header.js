import classes from './Header.module.css';
import {authActions} from '../store/index'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const isAuth = useSelector((state)=>state.auth.isAuth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
        {
          isAuth ?  <><li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li></> : <button>Login</button>
        }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
