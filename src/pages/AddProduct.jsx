import React, { useState } from 'react'
import { supabase } from '../../supabase_client'

const AddProduct = ({closeDailog,refreshTable}) => {

   const [productsForm, setProductForm] = useState({
       title:'',
       price:'',
       description:'',
       category:'',
   })

   const handleFormChanges  = (e) => {
       const {name, value} = e.target;
       //Use the name attribute  of the input to update the corresponding state
       setProductForm(prevData => ({
        ...prevData,
        [name]:value
       })) 
   }

   
    const handleSubmit =  async (e) => {debugger
        e.preventDefault();
        try{
             const {data, error} = await supabase.from('products').insert([{
                ...productsForm,
                price:Number(productsForm.price), //important if DB type is numeric

            }])
            if(error){
                  console.error('Insert Error:', error.message)
                   return
            }
            refreshTable()
            console.log("Inserted:", data);

            // Clear form only after successs
             setProductForm({
                title:'',
                price:'',
                description:'',
                category:''
             })
             closeDailog();


        }catch(error){
            console.error("Unexpected Error:", error)
        }
    }



  return (
    <div>
             <div >
                <form onSubmit={handleSubmit} className='p-2 flex flex-col '>
                    <div className="mb-4">
                        <label className="block text-slate-200 text-sm mb-2" htmlFor="username">
                            Title
                        </label>
                        <input className="border border-neutral-500 rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="title" name='title' value={productsForm.title}
                        onChange={handleFormChanges}
                        required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-200 text-sm mb-2" htmlFor="username">
                            Price
                        </label>
                        <input  name='price' value={productsForm.price}  onChange={handleFormChanges} required className="border border-neutral-500 rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Price" />
                    </div>
                      <div className="mb-4">
                        <label className="block text-slate-200 text-sm mb-2" htmlFor="username">
                            Description
                        </label>
                        <input name='description' value={productsForm.description}  onChange={handleFormChanges} required className="border border-neutral-500 rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Description" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-200 text-sm mb-2" htmlFor="username">
                            Category
                        </label>
                        <input  name='category' value={productsForm.category}  onChange={handleFormChanges} required className="border border-neutral-500 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Category" />
                    </div>
                    <div className='flex justify-center'>
                         <button type='submit' className='bg-blue-700 p-2 flex justify-end rounded-lg text-left cursor-pointer'>Save Product</button>
                    </div>
                 </form>   
                </div>
               
    </div>
  )
}

export default AddProduct
