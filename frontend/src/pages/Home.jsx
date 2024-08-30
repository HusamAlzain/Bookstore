import React, { useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/books")
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
        setLoading(false);
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button 
                className='bg-sky-600 text-white rounded-xl px-4 py-2 gap-2'
                onClick={() => setShowType('table')}>Table</button>
                <button 
                className='bg-sky-600 text-white rounded-xl px-4 py-2 gap-2'
                onClick={() => setShowType('card')}>Card</button>

            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Books List</h1>
                <Link to={'/books/create'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Book</Link>
            </div>
            {loading ? 
                <Spinner /> : showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
        </div>
    )
}

export default Home