import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function About({ }: Props) {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{opacity: 1 }}
    className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1, x: 0
        }}
        viewport={{ once: true }}
        src="lucas2.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
             md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />


      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          here is a <span className='underline decoration-[#F7AB0A]'>little</span> background

        </h4>
        <p className='text-base'>
          As a Full-Stack Web Developer from France, my name is Lucas and I am passionate
          about working with React. I have experience with a range of other languages,
          including Next.js, TypeScript, SQL, and Node.js. When I'm not working on web
          development, I enjoy keeping active through sports such as bodybuilding and
          skydiving. Based in Toulouse, I bring a joyful and energetic approach to my work,
          always striving for excellence in everything I do. Whether it's building complex
          web applications or designing visually appealing websites, I am dedicated to delivering
          exceptional results that exceed expectations.
        </p>
      </div>
    </motion.div>
  )
}

export default About