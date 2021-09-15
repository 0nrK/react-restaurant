import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { IoPizza } from 'react-icons/io5'
import ProductsContainer from './components/ProductsContainer';
import Footer from './components/Footer';
import Potd from './components/Potd';


function App() {

  const [sidebar, setSidebar] = useState(false)

  function menuHandling() {
    setSidebar(!sidebar)
  }

  return (
    <>
      <main>
        <div className='hero'>
          <nav>
            <span onClick={menuHandling} >Logo</span>
            <button onClick={menuHandling} className='menu-btn'><IoPizza /></button>
          </nav>
          {sidebar && <Sidebar menuHandling={menuHandling} />}
          <div className='hero-text'>
            <h1>GREATEST </h1>
            <h1>PIZZA EVER</h1>
            <hr/>
            <h2>READY IN 7Min</h2>
            <hr/>
            <button className='order-btn'>Place Order</button>
          </div>
        </div>
        <section className='products-container'>
          <h2>Choose your favorite</h2>
          <div className='product'>
          <ProductsContainer/>
          </div>
        </section>
        <section className='potd'>
          <Potd/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    </>
  );
}

export default App;
