import { logo } from '@/client/lib/icon'
import Image from 'next/image'
import React from 'react'


const MainLogo = () => {
  return (
    <div>
      <span className='inline-block w-72'>
        <Image src={logo.mainLogo} alt="Noman's Blog" width={100} height={100} className='size-full' />
      </span>
    </div>
  )
}

export default MainLogo