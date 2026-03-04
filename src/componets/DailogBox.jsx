import React from 'react'

const DailogBox = ({isOpen , onClose , children, width,formHeader}) => {
   
    



  return (
    <>
     <div className={`p-2  fixed inset-0 flex items-center justify-center transition-all duration-300 ${ isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* BackDrop  */}
        <div  className='absolute inset-0 bg-black/40 backdrop-blur-sm' onClick={onClose} />
         
         {/*Dailog Box*/}
         
         <div className={`relative bg-neutral-700 shadow-neutral-600 rounded-2xl p-2 ${width} transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`}>
             
             <div className='border-b border-b-neutral-500/30 p-2 flex justify-between'>
                <h1>{formHeader}</h1>
                                    <button type='button' className='bg-red-500 p-1 px-3 rounded cursor-pointer s' onClick={onClose}>Close</button>

             </div>
             {children}
         </div>

         
      </div> 
      
    </>
  )
}

export default DailogBox
