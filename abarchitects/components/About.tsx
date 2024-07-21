import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const About = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className='w-10/12 h-52 border rounded-lg flex'>
            <div className='ml-2'>
                <p className='font-bold text-[35px]'>ABOUT US</p>
                <Button variant={'secondary'} className='mt-3 bg-gray-900 text-white w-32'><p className='text-[11px]'>Learn More</p></Button>
                <p className='text-[10px] mt-3'>Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. 
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. 
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide.
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide.
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide.
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide</p>
            </div>
        </div>

    </section>
  )
}

export default About