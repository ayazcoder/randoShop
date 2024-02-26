import React, { useState } from 'react'
import { Card } from '../Card'
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import p4 from '../../assets/images/p4.jpg';


export const Products = () => {
    const [favouriteItems, setFavouriteItems] = useState({})
    console.log('favroit items', favouriteItems)
  return (
    <div className='flex gap-4 flex-wrap justify-center items-center my-4'>
        <Card id={1} img={p1} name={'Gray Vintage Chair'} category={'Furniture'} price={'100'} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems}/>
        <Card id={2} img={p2} name={'Gray Vintage Chair'} category={'Furniture'} price={'100'} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems}/>
        <Card id={3} img={p3} name={'Gray Vintage Chair'} category={'Furniture'} price={'100'} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems}/>
        <Card id={4} img={p4} name={'Gray Vintage Chair'} category={'Furniture'} price={'100'} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems}/>
        <Card id={5} img={p2} name={'Gray Vintage Chair'} category={'Furniture'} price={'100'} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems}/>
    </div>
  )
}
