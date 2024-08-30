import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
const SingleBookCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2'>
            {book.map((book) => (
                <div
                    key={book._id}
                    className="border border-slate-800 rounded-md p-4 relative hover:shadow-xl">
                    <h2 className='absolute top-1 right-2 px-4 bg-red-300 rounded-lg'>{book.publishYear}</h2>
                    <h2 className=' top-1 left-2 px-1'>{book._id}</h2>
                    <div className="flex justify-start items-center gap-x-2">
                        <PiBookOpenTextLight className='text-red-300 text-2xl' />
                        <h2 className='my-1'>{book.title}</h2>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className='text-red-300 text-2xl' />
                        <h2 className=''>{book.author}
                        </h2>
                    </div>
                    <div className="flex justify-between gap-x-2 mt-4 p-4">
                        <BiShow
                            className='text-2xl text-blue-800 cursor-pointer'
                            onClick={() => setShowModal(true)}
                        />
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800 ' />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600' />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600' />
                        </Link>
                    </div>
                    {showModal && (
                        <BookModal book={book} onClose={() => setShowModal(false)} />
                    )}
                </div>
            ))}
        </div>)
}

export default SingleBookCard