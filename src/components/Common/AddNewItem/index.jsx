import React from 'react';
import * as Yup from 'yup';
import { Input } from '../Input';
import { Button } from '../Button';
import { useFormik } from 'formik';
import { getItems } from '../../../State/ItemsContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const AddNewItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createItem, updateItem } = getItems()
  const item = location.state ? location.state : null;
  const id = item?.id
  const img = item?.img
  const name = item?.name
  const price = item?.price
  const category = item?.category

  const validationSchema = Yup.object({
    name: Yup.string().required('Product Name is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().required('Price is required'),
    img: Yup.mixed().required('Image is required'),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      id: id || '',
      name: name || '',
      category: category || '',
      price: price || '',
      img: img || '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (id) {
          await updateItem(id, values)
        navigate('/admin');
        } else {
          await createItem(values)
        navigate('/shop');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
  return (
    <div className="flex justify-center sm:items-center min-h-screen pt-20 sm:pt-0">
      <div className='bg-white w-[600px] h-[600px] flex items-center justify-center flex-col gap-3'>
        <div className="text-3xl font-bold mb-3 text-color-primary">Add New Item</div>
        <form className='flex flex-col w-full justify-center items-center gap-3' onSubmit={formik.handleSubmit}>
          <Input
            label='Product Name'
            name='name'
            type='text'
            className=""
            isRequired={true}
            placeholder='Enter Your Product Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
          <div className='w-1/2'>
            <label htmlFor="category" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Category</label>
            <select
              id="category"
              name="category"
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select a Category</option>
              <option value="Furniture">Furniture</option>
              <option value="Clocks">Clocks</option>
              <option value="Toys">Toys</option>
            </select>
          </div>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-500">{formik.errors.category}</div>
          ) : null}
          <Input
            label='Price'
            name='price'
            type='number'
            className=""
            isRequired={true}
            placeholder='Enter Your Price'
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500">{formik.errors.price}</div>
          ) : null}
          <Input
            label='img'
            name='img'
            type='text'
            className=""
            isRequired={true}
            placeholder='Enter Your Price'
            value={formik.values.img}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.img && formik.errors.img ? (
            <div className="text-red-500">{formik.errors.img}</div>
          ) : null}
          <Button
            label="Add Item"
            type="submit"
            className="w-1/2 mt-2 bg-color-primary text-white"
          />
        </form>
      </div>
    </div>
  );
};

