import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
//import About from './components/About';
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={
          <React.Suspense fallback='loading...'>
            <LazyAbout></LazyAbout>
          </React.Suspense>
        }></Route>
        <Route path='order-summary' element={<OrderSummary></OrderSummary>}></Route>
        <Route path='products' element={<Products></Products>}>
          <Route index element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route path='new' element={<NewProducts></NewProducts>}></Route>
          <Route path='featured' element={<FeaturedProducts></FeaturedProducts>}></Route>
        </Route>
        <Route path='users' element={<Users></Users>}>
          {/* <Route path='users/:userId' element={<UserDetails></UserDetails>}></Route>
          <Route path='users/admin' element={<Admin></Admin>}></Route> */}
          <Route path=':userId' element={<UserDetails></UserDetails>}></Route>
          <Route path='admin' element={<Admin></Admin>}></Route>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
