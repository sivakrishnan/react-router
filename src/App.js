import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
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
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>

  );
}

export default App;
