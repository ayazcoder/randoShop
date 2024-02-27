// import React from 'react'

// export const AddNewItem = () => {
//   return (
//     <div className='flex items-center justify-center w-full min-h-screen'>
//       <form className="w-full max-w-lg">
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//               Product Name
//             </label>
//             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
//               <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//               Category
//             </label>
//             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//               Price
//             </label>
//             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="tel" placeholder="100"/>
//               <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ApiService from '../../services/api';

export const  AddNewItem = () => {
  const navigate = useNavigate();

  // Validation Schema
  const validationSchema = Yup.object({
    productName: Yup.string().required('Product Name is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().required('Price is required'),
    img: Yup.mixed().required('Image is required')
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      productName: '',
      category: '',
      price: '',
      img: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await ApiService.createItem('/', values);
        navigate('/shop');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        formik.setFieldValue('img', file.name);
      } else {
        alert("Please select a valid image file.");
      }
    }
  };
  
  return (
    <div className="flex justify-center sm:items-center min-h-screen pt-20 sm:pt-0">
      <div className='bg-white w-[600px] h-[600px] flex items-center justify-center flex-col gap-5'>
        <div className="text-3xl font-bold mb-5 text-color-primary">Add New Item</div>
        <form className='flex flex-col w-full justify-center items-center gap-5' onSubmit={formik.handleSubmit}>
          <Input
            label='Product Name'
            name='productName'
            type='text'
            className=""
            isRequired={true}
            placeholder='Enter Your Product Name'
            value={formik.values.productName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.productName && formik.errors.productName ? (
            <div className="text-red-500">{formik.errors.productName}</div>
          ) : null}

          <Input
            label='Category'
            name='category'
            type='text'
            className=""
            isRequired={true}
            placeholder='Enter Your Category'
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-500">{formik.errors.category}</div>
          ) : null}

          <Input
            label='Price'
            name='price'
            type='tel'
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
            label='Image'
            name='img'
            type='file'
            className=''
            isRequired={true}
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.img && formik.errors.img ? (
            <div className="text-red-500">{formik.errors.img}</div>
          ) : null}

          <Button
            label="Add Item"
            type="submit"
            className="w-1/2 mt-5"
            disabled={formik.isSubmitting || !formik.isValid}
          />
        </form>
      </div>
    </div>
  );
};

