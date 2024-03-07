import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section id='hero'>
      <div  className='flex w-full min-h-[40rem] bg-slate-700 bg-opacity-50 items-center justify-center p-[2.2em] md:px-[8em] lg:px-[16em]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center anim-fadeInDown'>
          <h1 className='text-[2.6rem] md:text-[4.5rem] pr-9 md:pr-0 md:mr-[2em] text-white font-semibold z-[10] max-w-[10em]'>
            Let me welcome you in my <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#3f3f3f] to-[#f7982a]'>CV site</span>
          </h1>
          <div className='bg-slate-500 bg-opacity-75 p-3 mt-[5rem] md:m-0 md:p-5 h-fit rounded-lg'>
            <p className=' text-white text-[1.4rem] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti et amet quis optio consequatur deserunt fuga, nisi aspernatur. Unde quaerat laboriosam repellendus voluptates dolore. Distinctio cumque hic porro excepturi error.</p>
            <p className='text-white text-[1.2rem] text-right italic'>~ Author</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero