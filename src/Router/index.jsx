import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from '../Helper'
import { Shop } from '../pages/Shop'
import { Blog } from '../pages/Blog'
import { About } from '../pages/About'
import { Admin } from '../pages/Admin';
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home/index'
import { Cart } from '../pages/Cart/index'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Layout/Navbar'
import { AddNewItem } from '../components/Common/AddNewItem/index'

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
        <ScrollToTop />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/add" element={<AddNewItem />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
    </>
    )
}
