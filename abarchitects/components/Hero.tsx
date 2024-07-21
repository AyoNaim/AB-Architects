import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className='w-full h-96  border-b'>
        <div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-[35px]'>ARCHITECTURAL SOLUTIONS</p>
                <Button variant={'secondary'} className='bg-gray-900 mt-4 text-white text-sm hover:bg-gray-600'>Contact us</Button>
                {/* <Image src={'/build.png'} alt='build' width={300} height={300}/> */}
            </div>
        </div>
    </section>
  )
}

export default Hero