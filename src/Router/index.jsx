import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home/index'
import { Cart } from '../pages/Cart/index'
import { AddNewItem } from '../components/AddNewItem'
import { Blog } from '../pages/Blog'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Shop } from '../pages/Shop'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer'
import ScrollToTop from '../Helper'

export const RouterComp = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
        });
    
        return () => {
            AOS.refresh();
        };
      }, []);
    
    return (<>
        <Navbar />
        <ScrollToTop/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/add" element={<AddNewItem />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </>
    )
}
