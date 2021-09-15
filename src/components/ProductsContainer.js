import React from 'react'
import { products } from './data'


const ProductsContainer = () => {

  return (
    <>
      {products.map(product => {
        return (
          <div className='products-wrapper'>
            <img src={product.img} alt={product.name}></img>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <span>{product.price}</span>
          </div>
        )
      })}
    </>
  )
}

export default ProductsContainer
