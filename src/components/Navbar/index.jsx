import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  const navigate = useNavigate()
  const handelClick = () =>{
    navigate('/cart')
  }
  const navigateToHome = () =>{
    navigate('/')
  }
  return (
    <nav class="bg-white text-color-primary flex justify-center items-center py-5">
      <div class="flex flex-1 justify-between items-center max-w-7xl">
        <div class="text-4xl font-bold cursor-pointer" onClick={navigateToHome}>
          RandomStore
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/')}  aria-current="page">Home</p>
            <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/shop')}>Shop</p>
            <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/blog')} >Blog</p>
            <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/about')} >About</p>
            <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/contact')} >Contact</p>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex justify-center items-center gap-4">
          <p class=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={()=>navigate('/add')}>Add New Item</p>
          <div class="flex space-x-4 relative cursor-pointer" onClick={handelClick}>
            <RiShoppingBagLine className='text-4xl' />
            <div className="absolute flex items-center justify-center -bottom-2 -right-2 rounded-full w-[20px] h-[20px] p-3 text-white bg-color-primary">10</div>
          </div>
        </div>
      </div>
    </nav>

  )
}
