
import PropTypes from 'prop-types'; // Importer PropTypes depuis 'prop-types'
import Favorite from './Fav';
 import './bookcard.css';


function BookCard({ book }) {
    return (
        <div className='book-cell'> 
            <a href='/' title={`Click to get ${book.title} info card`} target="_blank" rel="noopener noreferrer">
                <div className='card'>
                 <img className='card_img' src={book.cover}  alt={book.title} />
                </div>
            </a>
            <div className='card_info'>
                <a href={book.linkShop} className='shopLink' target="_blank" rel="noopener noreferrer">Link</a>
                <Favorite />
            </div>
        </div>
    );
}

// Ajouter la validation des props avec PropTypes
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired, // Valider que 'title' est une chaîne de caractères requise
    cover: PropTypes.string.isRequired, // Valider que 'cover' est une chaîne de caractères requise
    linkShop: PropTypes.string.isRequired // Valider que 'linkShop' est une chaîne de caractères requise
  }).isRequired // Le prop 'book' est requis
};

export default BookCard;
