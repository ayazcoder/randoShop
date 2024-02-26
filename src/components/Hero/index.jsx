import React, { useEffect, useState } from 'react';
import Image from '../../assets/images/slider1.jpg';

export const Hero = () => {
    const [selectedSpan, setSelectedSpan] = useState(null);
    const year = new Date().getFullYear();
    const backgroundImageStyle = {
        backgroundImage: `url('${Image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const handleSpanClick = (index) => {
        setSelectedSpan(index);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSpan((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='h-screen w-full flex items-center justify-center' style={backgroundImageStyle}>
            <div className="w-full flex  flex-col gap-4 mx-20">
                <div className="flex gap-4 items-center justify-stat">
                    <hr className='h-[4px] w-[70px] bg-color-primary text-color-primary' />
                    <p className='uppercase text-color-primary'>Trending {year}</p>
                </div>
                <p className="text-6xl uppercase text-color-primary font-normal"> Interior design </p>
                <p className="text-lg text-color-primary"> Consectetur adipisicing elit. </p>
                <p className="text-lg text-color-primary"> Lorem ipsum dolor. </p>
                <div className="">
                    <button className='uppercase text-color-primary font-semibold border-b-2 border-color-primary'>Buy now </button>
                </div>
            </div>
            <div className="absolute bottom-0 flex gap-4">
                <div className="flex justify-center items-center">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <span key={index} onClick={() => handleSpanClick(index)} class={` flex cursor-pointer items-center justify-center w-auto h-auto rounded-full ${selectedSpan === index ? 'border-2 border-color-primary m-2' : 'm-2'}`}>
                            <span className={`inline-block w-[10px] h-[10px] rounded-full  ${selectedSpan === index ? 'bg-color-primary' : 'bg-white'} m-3`}></span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
