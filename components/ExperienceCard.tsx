import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
                src='ballon.jpg'
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'> CEO of Life</h4>
                <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
                <div className='flex space-x-2 my-2'>
                    <img 
                    className='h-10 w-10 rounded-full'
                    src="java2.png"
                    alt="" />
                     <img 
                    className='h-10 w-10 rounded-full'
                    src="java2.png"
                    alt="" />
                     <img 
                    className='h-10 w-10 rounded-full'
                    src="java2.png"
                    alt="" />
                </div>
                <p> Started work at ... end </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard