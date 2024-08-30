import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'


const BackButton = ({ desttination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={desttination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='inline mr-2'/>
        </Link>
    </div>
  )
}

export default BackButton