import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductProvider from './Context/ProductProvider';
import Cart from './Pages/Home/Cart';
import Featured from './Pages/Home/Featured';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

const App = () => {



  return (

      <ProductProvider>
    <div className='px-20'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/featured' element={<Featured/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
      </ProductProvider>
  );
};

export default App;