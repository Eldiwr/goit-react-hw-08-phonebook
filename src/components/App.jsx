import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { PhoneBookPage } from '../pages/PhoneBookPage';
import { LoginPage } from '../pages/LoginPage';

export const App = () => {

  
  
    return (
      <Routes>
        <Route path='/' element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/contacts' element={<PhoneBookPage />} />
          <Route path='/login' element={<LoginPage/>} />
        </Route>
      </Routes>     
    )
};