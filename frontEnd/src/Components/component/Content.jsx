
import Quotes from './Quotes';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import Pagination from './Pagination';
import BookListG from './BookListHome';
import './content.css';


export default function Content() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    useEffect(() => {
        axios.get(`http://localhost:5000/homeBooks`)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const booksInRows = [];
    while (currentBooks.length > 0) {
        booksInRows.push(currentBooks.splice(0, 2));
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(currentBooks);

    const genreBooks = {};
    currentBooks.forEach(book => {
        if (!genreBooks[book.category]) {
            genreBooks[book.category] = [];
        }
        genreBooks[book.category].push(book);
    });

    return (
        <>
            <div className="book-container1">
                <h2 className="casetitle">Books Showcase</h2>
                <div className="shelf1">
                    {booksInRows.map((row, index) => (
                        <div key={index} className="row">
                            {row.map(book => (
                                <BookCard key={book.bookID} book={book} />
                            ))}
                        </div>
                    ))}
                    <Pagination
                        booksPerPage={booksPerPage}
                        totalBooks={books.length}
                        paginate={paginate}
                    />
                </div>
                <div>
<div className="genre-shelves">
                <ul>
    <li className='li-category'>
        <h2 className='catname'>Fantasy:</h2>
        <div className='gshelf1'>
            <BookListG key="fantasy" category={"fantasy"} />
        </div>
    </li>
    <li className='li-category'>
        <h2 className='catname'>Coding:</h2>
        <div className='gshelf2'>
            <BookListG key="coding" category={"coding"} />
        </div>
    </li>
    <li className='li-category'>
        <h2 className='catname'>Psychologie:</h2>
        <div className='gshelf3'>
            <BookListG key="Psychologie" category={"Psychologie"} />
        </div>
    </li>
    <li className='li-category'>
        <h2 className='catname'>Philosophy:</h2>
        <div className='gshelf4'>
            <BookListG key="philosophy" category={"philosophy"} />
        </div>
    </li>
</ul>

                    </div>
                </div>
                <Quotes />
            </div>
        </>
    );
}
