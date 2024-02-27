import React from 'react'
import { Products } from '../../components/Common/Products'

export const Admin = () => {
  return (
    <div className='min-h-screen w-full relative'>
        <Products admin={true}/>
    </div>
  )
}
