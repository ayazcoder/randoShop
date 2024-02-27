import React, { useEffect, useState } from 'react'
import ApiService from '../../services/api';
import { Hero } from '../../components/Hero';
import { Products } from '../../components/Products';

export const Home = () => {
  const [itemsData, setItemsData] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await ApiService.getAllItems("/items");
        setItemsData(response);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  
  return (
    <div className='px-4'>
      <Hero />    
      <Products/>
      <div className='bg-gray-400'>
        <h1 className="text-3xl text-red-800 font-bold underline">
          Hello world!
        </h1>
        <div className="items">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {itemsData?.map((data) => (
              <li key={data.id} className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={data.img} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {data.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${data.price}
                  </div>
                </div>
              </li>
            ))}

          </ul>

        </div>
      </div>
    </div>
  )
}
