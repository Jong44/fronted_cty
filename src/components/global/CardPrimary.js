import React from 'react'

const Index = ({children}) => {
  return (
    <div className='shadow-md rounded-md bg-white w-[15rem] h-[10rem] p-4 flex flex-col justify-center items-center'>
       {children}
    </div>
  )
}

export default Index