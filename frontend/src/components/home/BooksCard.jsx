import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import SingleBookCard from './SingleBookCard';
const BooksCard = ({ books }) => {
    return (
        <SingleBookCard book={books} />
    )
}

export default BooksCard