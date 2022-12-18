import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from '../redux/selectors';
import { useEffect } from 'react';
import { PrivateRoute } from '../privateRoute';
import { RestrictedRoute } from '../restrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBookPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));


export const App = () => {

  const dispatch = useDispatch();
  const  isRefreshing  = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
    return isRefreshing ? (<b>Refreshing user...</b>) : (
      <Suspense>
      <Routes>
        <Route path="/" element={<AppBar />} >
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
        />
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
        />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
        }
        />
      </Route>
      </Routes> 
      </Suspense>    
    )
};