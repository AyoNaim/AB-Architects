import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 w-11/12 rounded-md border mt-2 flex justify-center items-center'>
        <div className='w-11/12 flex justify-between'>
          <div className='flex justify-between items-center gap-5'>
            <Image src={'./vercel.svg'} alt='logo' width={30} height={30} />
            <Link href={'./'}><p className='text-sm font-bold'>Hire now .</p></Link>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <Link href={'./'}> <p className='text-sm font-semibold'>Project</p> </Link>
            <Link href={'./'}> <p className='text-sm font-semibold'>Product</p> </Link>
            <Link href={'./'}> <p className='text-sm font-semibold'>Resources</p> </Link>
            <Link href={'./'}>
              <Image src={'./hamburger.svg'} alt='menu' width={30} height={30} />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar