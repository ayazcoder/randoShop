import React from 'react'
import { Hero } from '../../components/Common/Hero';
import { Products } from '../../components/Common/Products';

export const Home = () => {
  return (
    <div className='px-4'>
      <Hero />    
      <Products/>
    </div>
  )
}
