import React from 'react'
import * as Strings from '../../constants/Strings'
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className='w-full h-[5rem] bg-[#131313]'>
      <div className='flex w-full h-full items-center justify-center'>
        <div className='flex flex-row w-full md:w-1/2 items-center justify-between'>
          <div className='font-bold text-[1.2rem]'>{Strings.Copyright_TEXT}</div>|
          <div className='font-bold text-[1.4rem]'>
            <a href={Strings.Author_GITHUB} target='_blank'><ImGithub /></a>
          </div>|
          <div className='text-transparent bg-gradient-to-t from-orange-400 to-slate-600 bg-clip-text font-bold text-[1.2rem]'>{Strings.Author_NAME}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer