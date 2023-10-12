import { useDispatch, useSelector } from 'react-redux';
import secureLocalStorage from 'react-secure-storage';
import { login } from '../store/LoginReducer';
import { Navigate, Outlet } from 'react-router-dom';

const FreedomRoute = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login);

  if (
    secureLocalStorage.getItem('username') !== null &&
    secureLocalStorage.getItem('username') === 'Yan Naing Htwe' &&
    secureLocalStorage.getItem('email') !== null &&
    secureLocalStorage.getItem('email') === 'yannainghtwe.777.yy@gmail.com' &&
    secureLocalStorage.getItem('password') !== null &&
    secureLocalStorage.getItem('password') === '12345678'
  ) {
    dispatch(login(true));
  }

  return loggedIn.value ? <Navigate to={'/'} /> : <Outlet />;
};

export default FreedomRoute;
