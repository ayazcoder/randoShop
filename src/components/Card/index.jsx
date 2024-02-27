import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
export const Card = ({ id, img, name, price, category, toggleHearts, setToggleHearts }) => {
    const toggleFavorite = () => {
        setToggleHearts(prevState => {
            // i write this for to copy previous state
            const updatedToggleHearts = { ...prevState };
            // now i will toggle the favorite status for the current ID
            updatedToggleHearts[id] = {
                id,
                img,
                name,
                price,
                category,
                isFavorite: !prevState[id]?.isFavorite
            };
            // If the item is already not favorited anymore, I will remove it from the toggleHearts
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
        <div key={id} className='w-[300px] flex flex-col gap-4 my-4'>
            <div data-aos="zoom-in" className='w-full h-[400px] flex flex-col justify-evenly items-center relative' style={backgroundImageStyle} >
                <div data-aos="fade-up" className="flex justify-between items-center text-black w-full px-4 absolute bottom-10">
                    <button className='w-full h-[50px] bg-white text-color-primary'>Add to cart</button>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='text-color-gray'>{category}</p>
                <span className='cursor-pointer' onClick={toggleFavorite} data-aos="zoom-in">
                    {isFavorite ? <IoMdHeart className='text-2xl' /> : <IoMdHeartEmpty className='text-2xl' /> }
                </span>
            </div>
            <p className='text-color-primary font-medium'>{name}</p>
            <p className='text-color-primary font-medium'>${price}</p>
        </div>
    )
}
