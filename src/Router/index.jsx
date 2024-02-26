import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home/index'
import { Cart } from '../pages/Cart/index'
import { AddNewItem } from '../components/AddNewItem'
import { Blog } from '../pages/Blog'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Shop } from '../pages/Shop'
export const RouterComp = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/add" element={<AddNewItem />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </>
    )
}
