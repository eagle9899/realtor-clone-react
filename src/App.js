import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Components/Header';

function App() {
  return (
    <>
      
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/offers' element={<Home />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
