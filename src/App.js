import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Header from './components/Header';
import EmployeeAbout from './pages/EmployeeAbout';
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, deleteFromBadge, deleteFromBasket, setDrawer } from './pages/basketSlice';


function App() {
  const { products, drawer, totalAmount, product } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());

  }, [])

  const removeProductFromBadge = (id) => {

    dispatch(deleteFromBadge(id));
    console.log("deleted product:", id)
    dispatch(calculateBasket());
  }

  return (<>
    <Header />

    <Drawer anchor='right' sx={{ padding: '20px' }} open={drawer} onClose={() => dispatch(setDrawer())}>

      {products && products.map((product) => {

        return (

          <div className='drawer' key={product.id}>
            <img src={product.image} style={{ with: '60px', height: '60px' }} />
            <p className='drawer-title'>{product.title}</p >
            <p className='drawer-price'>{product.price}</p>
            <div style={{ height: '15px', padding: '5px', marginTop: '10px' }}>  <button className='drawer-button' onClick={() => removeProductFromBadge(product.id)}>SIL</button></div>

          </div>


        )

      })



      }
      <div>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Total:{totalAmount}</p>

      </div>

    </Drawer>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='employee' element={<EmployeeAbout />} />
      <Route path='company' element={<CompanyAbout />} />

      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />


      <Route path='/product-details/:id' element={<ProductDetails />} />


    </Routes>
  </>
  )
}

export default App;
