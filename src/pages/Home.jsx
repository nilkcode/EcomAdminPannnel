import React, { useEffect, useState } from 'react'

const Home = () => {

   const [tableDataList, setTableDataList] = useState([]);


   useEffect(() => {
        getDataList()
   }, [])

   const getDataList = async () => {
        let response =  await fetch("https://fakestoreapi.com/products");
        let data = await response.json()
        setTableDataList(data)
    }
   console.log(tableDataList)

    return (
        <div>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default m-1">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="bg-neutral-secondary-soft border-b border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Category
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
                        tableDataList.map((item) => (
                             <tr key={item.id}  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                               {item.title}
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                <a className="font-medium text-fg-brand hover:underline bg-blue-500 rounded p-2">Edit</a>
                            </td>
                        </tr>

                        ))
                      }
                       

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home
