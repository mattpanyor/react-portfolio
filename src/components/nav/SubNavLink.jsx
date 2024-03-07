import React from 'react'
import { Link } from 'react-router-dom'

function SubNavLink({link, text, icon}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <span className='text-xl'>{icon}</span>
        <Link to={link} className="text-md text-neutral-200">{text}</Link>
    </div>
  )
}

export default SubNavLink