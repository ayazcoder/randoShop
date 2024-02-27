import React, { useState } from 'react'
import { Card } from '../Card'
import { getItems } from '../../../State/ItemsContext'

const categories = [
  'Clocks',
  'Furniture',
  'Electronics',
  'Toys'
]

export const Products = ({ admin }) => {
  const { itemsData } = getItems()
  const [searchQuery, setSearchQuery] = useState('')
  const [favouriteItems, setFavouriteItems] = useState({})
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const filteredItemsData = selectedCategories.length === 0 ? itemsData : itemsData?.filter(item => selectedCategories.includes(item.category))

  const searchFilteredItems = filteredItemsData?.filter(item => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const lowerCaseName = item.name.toLowerCase()
    const lowerCaseCategory = item.category.toLowerCase()

    return lowerCaseName.includes(lowerCaseQuery) ||
      lowerCaseCategory.includes(lowerCaseQuery) ||
      item.price.toString().includes(searchQuery)
  })


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-2 p-4">
          {categories.map((category) => (
            <div
              key={category}
              className={`cursor-pointer rounded border p-2 flex items-center justify-center font-semibold ${selectedCategories.includes(category)
                ? 'bg-color-primary text-white'
                : 'bg-white text-color-primary'
                }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </div>
          ))}

          <div className="">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-color-primary border border-gray-300 rounded-lg bg-white outline-none " placeholder="Search Mockups, Logos..." onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
          </div>

        </div>
      </div>
      <div className='flex gap-4 flex-wrap justify-center items-center my-4'>
        {
          searchFilteredItems?.length > 0 ?
            searchFilteredItems?.map(({ id, price, name, category, img }) => (
              <Card key={id} id={id} img={img} name={name} category={category} price={price} toggleHearts={favouriteItems} setToggleHearts={setFavouriteItems} admin={admin} />
            ))
            : <div className="flex items-center justify-center text-4xl py-10">
              No items found in this category
            </div>
        }
      </div>
    </div>
  )
}
