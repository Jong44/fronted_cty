import React from 'react'
import Image from 'next/image'

const Index = () => {
  return (
    <header className="shadow-md p-4 fixed top-0 left-0 w-full bg-white z-10 flex justify-between items-center">
      <div>
        <Image src="/assets/logo.svg" alt="logo" width={120} height={120} />
      </div>
      <div>
        
      </div>
    </header>
  )
}

export default Index