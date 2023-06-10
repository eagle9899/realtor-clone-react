import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
import PrivateRoute from './Components/PrivateRoute';
import CreateListing from './Pages/CreateListing';
import EditListing from './Pages/EditListing';
import Listing from './Pages/Listing';
import Offers from './Pages/Offers';

function App() {
  return (
    <>
      
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<PrivateRoute />}>

              <Route path='/profile' element={<Profile />} />
            </Route>

            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/category/:categoryName/:listId' element={<Listing />} />
            <Route path='/create-lists' element={<PrivateRoute />}>
              <Route path='/create-lists' element={<CreateListing />} />
            </Route>
            <Route path='/edit-listing' element={<PrivateRoute />}>
              <Route path='/edit-listing/:listId' element={<EditListing />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </HelmetProvider>
    </>
  );
}

export default App;
