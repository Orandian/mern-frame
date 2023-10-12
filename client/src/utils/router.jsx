import ErrorPage from '../components/layouts/ErrorPage';
import RootLayout from '../components/layouts/RootLayout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import Home from '../views/Home/Home';
import PrivateRoute from './PrivateRoute';
import Login from '../views/Auth/Login';
import FreedomRoute from './FreedomRoute';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
        </Route>
      </Route>

      <Route element={<FreedomRoute />}>
        <Route
          path="/login"
          element={<RootLayout />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<Login />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
