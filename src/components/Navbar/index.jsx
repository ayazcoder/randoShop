import React, { useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const handelClick = () => {
    navigate('/cart')
  }
  const handleNavigateMenu = (path) => {
    navigate(path)
    setShowModal(false)
  }
  const navigateToHome = () => {
    navigate('/')
  }
  return (
    <nav className="bg-white text-color-primary flex justify-center items-center py-5 relative">
      <div className="flex flex-1 justify-between items-center max-w-7xl relative">
        <div className="text-4xl font-bold cursor-pointer px-6 sm:px-0" onClick={navigateToHome}>
          RandomStore
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/')} aria-current="page">Home</p>
            <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/shop')}>Shop</p>
            <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/blog')} >Blog</p>
            <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/about')} >About</p>
            <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/contact')} >Contact</p>
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex justify-center items-center gap-4">
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={() => navigate('/add')}>Add New Item</p>
          <div className="flex space-x-4 relative cursor-pointer" onClick={handelClick}>
            <RiShoppingBagLine className='text-4xl' />
            <div className="absolute flex items-center justify-center -bottom-2 -right-2 rounded-full w-[20px] h-[20px] p-3 text-white bg-color-primary">10</div>
          </div>
        </div>

        <div className={`flex  sm:hidden justify-end gap-4 pr-3`}>
          <div className="block relative cursor-pointer" onClick={handelClick}>
            <RiShoppingBagLine className='text-4xl' />
            <div className="absolute flex items-center justify-center -bottom-2 -right-2 rounded-full w-[20px] h-[20px] p-3 text-white bg-color-primary">10</div>
          </div>
          <RiShoppingBagLine className='text-4xl ' onClick={() => setShowModal(!showModal)} />
        </div>
      </div>
      {showModal ?
        <div className="flex flex-col gap-2 fixed top-20 z-10 right-4  w-[150px] text-white  rounded-lg bg-color-primary">
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={()=>handleNavigateMenu('/')}>Home</p>
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={() => handleNavigateMenu('/add')} >Add New Item</p>
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={() => handleNavigateMenu('/shop')}>Shop</p>
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={() => handleNavigateMenu('/blog')} >Blog</p>
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={() => handleNavigateMenu('/about')} >About</p>
          <p className=" rounded-md px-3 py-2 text-base font-medium cursor-pointer border-b-2 border-white" onClick={() => handleNavigateMenu('/contact')} >Contact</p>
        </div>
        : ""}
    </nav>

  )
}
