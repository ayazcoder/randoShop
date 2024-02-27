import React, { useState } from 'react';
import Image from '../../assets/images/slider1.jpg';
import { CartItem } from '../../components/CartItem';

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="flex justify-center px-10">
      <div className='max-w-7xl w-full min-h-screen '>
        <p className="text-3xl font-semibold text-color-primary text-center pt-10">Your Cart (4 items)  </p>
        <table className="table-auto w-full mt-10">
          <thead>
            <tr className='border border-b-2 border-t-0 border-r-0 border-l-0 border-color-gray '>
              <th className='text-start py-4'>Item</th>
              <th className='text-start py-4'>Price</th>
              <th className='text-start py-4'>Quantity</th>
              <th className='text-start py-4'>Total</th>
              <th className='text-start py-4'>Checkout</th>
            </tr>
          </thead>
          <tbody>
            <CartItem quantity={quantity} setQuantity={setQuantity} name={"Boats"} price={'100'} img={Image} />
            <CartItem quantity={quantity} setQuantity={setQuantity} name={"Boats"} price={'100'} img={Image} />
            <CartItem quantity={quantity} setQuantity={setQuantity} name={"Boats"} price={'100'} img={Image} />
            <CartItem quantity={quantity} setQuantity={setQuantity} name={"Boats"} price={'100'} img={Image} />
          </tbody>
        </table>

      </div>
    </div >
  );
};
