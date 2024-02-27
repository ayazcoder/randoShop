import React, { createContext, useState, useEffect, useContext } from 'react';
import ApiService from '../services/api';

const ItemsContext = createContext();

export const getItems = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await ApiService.getAllItems("/items");
      setItemsData(response);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const createItem = async (formData) => {
    try {
      const response = await ApiService.createItem("/items", formData);
      setItemsData(prevItemsData => [...prevItemsData, response]);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const updateItem = async (id, values) => {
    try {
      await ApiService.updateItem(`/items/${id}`, values);
      const updatedItemsData = itemsData.map(item => {
        if (item.id === id) {
          return { ...item, ...values };
        }
        return item;
      });
      setItemsData(updatedItemsData);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await ApiService.deleteItem(`/items/${id}`);
      const updatedItemsData = itemsData.filter(item => item.id !== id);
      setItemsData(updatedItemsData);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <ItemsContext.Provider value={{ itemsData, fetchItems, createItem, updateItem, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  );
}