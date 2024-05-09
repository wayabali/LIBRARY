import PropTypes from 'prop-types';
import './pagination.css';

export default function Pagination({ booksPerPage, totalBooks, currentPage, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
                        <a onClick={() => paginate(number)} href={`#${number}`} className='page-link'>  
                            {number}
                        </a>
                    </li>
                ))}
                <li className='page-item'>
                   
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
  booksPerPage: PropTypes.number.isRequired,
  totalBooks: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};
