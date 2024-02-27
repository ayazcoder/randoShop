import React from 'react';

export const CartItem = ({ id, img, price, name }) => {
  return (
    <tr className='my-6' key={id}>
      <td className='py-4'>
        <div className="flex gap-5 justify-start items-center">
          <div className="h-[100px] w-[100px]">
            <img src={img} alt="not found" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-color-primary">{name}</p>
          </div>
        </div>
      </td>
      <td className='py-4'>${price}</td>
      <td className='py-4  text-end'> <button className='px-4 py-2 bg-color-primary text-white rounded-lg font-semibold'>Checkout</button></td>
    </tr>
  );
};
