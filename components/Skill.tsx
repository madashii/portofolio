import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>

            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src='coeur2.png'
                className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32
                  filter group-hover:grayscale transition duration-300 ease-in-out '/>

            <div className='absolute opacity-0  group-hover:opacity-80 rounded-full z-0 md:w-28 md:h-28 w-24 h-24 xl:w-32 xl:h-32
         group-hover:bg-white transition duration-300 ease-in-out '>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'> 99%</p>
                </div>
            </div>

        </div>
    )
}

export default Skill