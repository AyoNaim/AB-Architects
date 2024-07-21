'use client'
import React, {useState} from 'react'
import { Button } from './ui/button';


const Tab = () => {
const [tab, setactiveTab] = useState('tab-2');

return (
    <section className='flex justify-center items-center mt-8 flex-col gap-5 h-96'>
        <div className='flex justify-between items-center gap-4'>
            <Button variant={'secondary'} className={`w-[100px] rounded-[20px] ${tab === 'tab-1' ? 'bg-gray-900 text-white hover:bg-gray-700' : ''}`}>Tab 1</Button>
            <Button variant={'secondary'} className={`w-[100px] rounded-[20px] ${tab === 'tab-2' ? 'bg-gray-900 text-white hover:bg-gray-700' : ''}`}>Tab 2</Button>
            <Button variant={'secondary'} className={`w-[100px] rounded-[20px] ${tab === 'tab-3' ? 'bg-gray-900 text-white hover:bg-gray-700' : ''}`}>Tab 3</Button>
            <Button variant={'secondary'} className={`w-[100px] rounded-[20px] ${tab === 'tab-4' ? 'bg-gray-900 text-white hover:bg-gray-700' : ''}`}>Tab 4</Button>
        </div>
        <div className='w-10/12 h-60 bg-red-500 rounded-lg'></div>
    </section>
  )
}

export default Tab