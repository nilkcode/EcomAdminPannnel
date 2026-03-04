import React from 'react'
import Sidebar from '../componets/Sidebar'
import Header from '../componets/Header'
import Footer from '../componets/Footer'


const MainLayout = ({children}) => {
  return (
    <> 
       <div className='flex bg-black'>
           <Sidebar/>
           <div className='screen-container grid grid-rows-[auto_1fr_auto] gap-y-1 h-screen grow' >
              <Header/>
              <main className='bg-neutral-800 flex flex-col h-full overflow-auto'>
                 {children}
              </main>
              <Footer/>
           </div>
       </div>
    </>
  )
}

export default MainLayout
