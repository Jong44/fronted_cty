import React from 'react'
import Image from 'next/image'

const Index = () => {
  return (
    <header className="shadow-md p-4">
      <div>
        <Image src="/assets/logo.svg" alt="logo" width={120} height={120} />
      </div>
    </header>
  )
}

export default Index