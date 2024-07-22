import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import React from 'react';

const Feedback = () => {
  return (
    <section className='flex justify-center items-center mt-5 mb-5'>
      <div className='w-10/12 h-96 gap-2 overflow-x-visible flex justify-between items-center'>
        <div className='h-full w-full rounded-md border border-gray-800 border-2 border-opacity-55 flex flex-col justify-between'>
            <div className='bg-green-400 w-6 h-3 mt-4 ml-10'></div>
            <div className='mb-4 ml-10'>
            <p className='text-[10px] mt-3'>Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. 
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide. 
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide.
                    Here at AB-Architects, our reputation preceeds us, we have constructed our client's dreams all over Nigeria, and we are looking forward to expanding our reach worldwide.
            </p>
            <AvatarGroup className='-left-full'>
                <Avatar isBordered showFallback color='default' radius='full' />
            </AvatarGroup>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
