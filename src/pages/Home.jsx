import React, { useEffect, useState } from 'react'
import DailogBox from '../componets/DailogBox';
import AddProduct from './AddProduct';
import { supabase } from '../../supabase_client';

const Home = () => {

   const [tableDataList, setTableDataList] = useState([]);
   const [filterTableList, setFilterTableList] = useState([])
   const [searchText, setSearchText] = useState('')
   const [showDailog, setShowDailog] = useState(false)

   useEffect(() => {
        getDataList()
   }, [])

   const getDataList = async () => {debugger
        let {data, error} =  await supabase.from('products').select('*');
          setTableDataList(data)
          setFilterTableList(data)

        if(error) {
            console.error(error.message);
            return;
        }      
    }

   
   
    const searchFindText = () => {debugger
        let searchFilterTableList =  tableDataList.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilterTableList(searchFilterTableList)
    }
   
   console.log(tableDataList)

    return (
        <div>
            <div className='flex justify-between items-center px-4'>
                <div className='inputForm'>
                    <label>Search Products</label>
                    <input type='text' className='inputSearch' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                    <button className='bg-blue-800 p-2 rounded' onClick={searchFindText}>Search Items</button>
                </div>
                <div>
                    <button type='button' className='bg-blue-800 p-2 px-6 rounded cursor-pointer' onClick={() => setShowDailog(true)}>Add Product</button>
                </div>
            </div>
         
            
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-neutral-700 m-1">
                <table className="relative w-full text-sm text-left rtl:text-right text-body">
                    <thead className="bg-neutral-secondary-soft border-b border-neutral-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Product name
                            </th>
                         
                            <th scope="col" className="px-6 py-3 font-medium">
                                Category
                            </th>
                               <th scope="col" className="px-6 py-3 font-medium">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=' ' >
                        
                      {
                        filterTableList.map((item) => (
                             <tr key={item.id}  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-neutral-700">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                               {item.title}
                            </th>
                            <td className="px-6 py-4">
                                {item.category}
                            </td>
                            <td className="px-6 py-4">
                                 {item.description}
                            </td>
                            <td className="px-6 py-4">
                                 {item.price}
                            </td>
                            <td className="px-6 py-4 flex gap-4">
                                <a className="font-medium text-fg-brand hover:underline bg-blue-800 rounded p-2">Edit</a>
                                <a className="font-medium text-fg-brand hover:underline bg-red-500 rounded p-2">Delete</a>
                            </td>
                        </tr>

                        ))
                      }
                      <tr className='fixed  bottom-9 bg-neutral-600 p-2.5 w-[86.6%]'>
                         <td>
                             No of Records : {filterTableList.length}
                         </td>
                      </tr>
                       

                    </tbody>
                     
                </table>
               
            </div>


            <DailogBox isOpen={showDailog} onClose={() => setShowDailog(false)} width={'w-200'} formHeader="Add Product">
                 <AddProduct  closeDailog={() => setShowDailog(false) } refreshTable={getDataList} />
            </DailogBox>

        </div>
    )



}

export default Home
