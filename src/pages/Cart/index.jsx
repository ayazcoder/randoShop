import React from 'react';
import { getCart } from '../../State/CartContext';
import { CartItem } from '../../components/Common/CartItem';

export const Cart = () => {
  const { cartItems, totalItems} = getCart()
  return (
    <div className="flex justify-center px-5 sm:px-10">
      <div className='max-w-5xl w-full min-h-screen '>
        <p className="text-3xl font-semibold text-color-primary text-center pt-10">Your Cart ({totalItems} {totalItems===1 ?"item":"items"})  </p>
        <table className="table-auto w-full mt-10">
          <thead>
            <tr className='border border-b-2 border-t-0 border-r-0 border-l-0 border-color-gray '>
              <th className='text-start py-4'>Item</th>
              <th className='text-start py-4'>Price</th>
              <th className='text-end py-4 pr-3'>Checkout</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(cartItems).map((item, id) => (
              <CartItem key={id} id={id} name={item.name} price={item.price} img={item.img}/>
            ))
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};
