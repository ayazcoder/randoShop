import React from 'react';
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { getCart } from '../../../State/CartContext';
import { getItems } from '../../../State/ItemsContext';

export const Card = ({ id, img, name, price, category, toggleHearts, setToggleHearts, admin }) => {
    const navigate = useNavigate()
    const { addToCart } = getCart();
    const { deleteItem } = getItems()
    const toggleFavorite = () => {
        setToggleHearts(prevState => {
            const updatedToggleHearts = { ...prevState };
            updatedToggleHearts[id] = {
                id,
                img,
                name,
                price,
                category,
                isFavorite: !prevState[id]?.isFavorite
            };
            if (!updatedToggleHearts[id].isFavorite) {
                delete updatedToggleHearts[id];
            }
            return updatedToggleHearts;
        });
    };
    const isFavorite = toggleHearts && toggleHearts[id] && toggleHearts[id].isFavorite;
    const backgroundImageStyle = {
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div key={id} className='w-[300px] h-[500px] flex flex-col gap-4 my-4'>
            <div data-aos="zoom-in" className='w-full h-full flex flex-col justify-evenly items-center relative bg-[#f3f3f3]' style={backgroundImageStyle} >
                <div data-aos="fade-up" className="flex justify-between items-center text-black w-full px-4 absolute bottom-10 gap-3">
                    {admin ? (
                        <>
                            <button className='w-full h-[50px] bg-color-primary text-white font-semibold' onClick={() => navigate(`/add`, { state: { id, price, name, category, img } })}>Update</button>
                            <button className='w-full h-[50px] bg-white text-color-primary font-semibold' onClick={() => deleteItem(id)}>Delete</button>
                        </>
                    ) : (
                        <button className='w-full h-[50px] bg-white text-color-primary font-semibold' onClick={() => id == 1 ? null : addToCart(id, { price, name, category, img })}>{id == 1 ? "Out of Stock" : "Add to cart"}</button>
                    )}
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-color-gray'>{category}</p>
                <span className='cursor-pointer' onClick={toggleFavorite} data-aos="zoom-in">
                    {isFavorite ? <IoMdHeart className='text-2xl' /> : <IoMdHeartEmpty className='text-2xl' />}
                </span>
            </div>
            <p className='text-color-primary font-medium'>{name}</p>
            <p className='text-color-primary font-medium'>${price}</p>
        </div>
    );
};
