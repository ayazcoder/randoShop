import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

export const CartItem = ({id, quantity, setQuantity, img, price, name}) => {
    
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
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
        <td className='py-4'>
          <div className="relative flex items-center max-w-[8rem] gap-0.5">
            <button onClick={decrementQuantity} type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <FaMinus/>
            </button>
            <input type="text" value={quantity} id="quantity-input" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 " placeholder="999" required />
            <button onClick={incrementQuantity} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <FaPlus/>
            </button>
          </div>
        </td>
        <td className='min-w-20'>${quantity * price}</td>
        <td className='py-4'> <button className='px-4 py-2 bg-color-primary text-white rounded-lg font-semibold'>Checkout</button></td>
      </tr>
  )
}
