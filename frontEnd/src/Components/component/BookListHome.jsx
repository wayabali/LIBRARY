import { useState, useEffect } from 'react'; // Remplacez React par { useState, useEffect }
import axios from 'axios';
import PropTypes from 'prop-types'; // Importez PropTypes pour la validation des props
import BookCard from './BookCard';

function BookListG({ category }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, [category]); 

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/homeCategory?category=${category}&limit=2`);
      if (response.data.length > 0) {
        setBook(response.data[0]); 
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  console.log('Category:', category); // Log the category value

  return (
    <div>
      {book && <BookCard key={book.bookID} book={book} />}
    </div>
  );
}

// Ajoutez la validation des props avec PropTypes
BookListG.propTypes = {
  category: PropTypes.string.isRequired // Validez que 'category' est une chaîne de caractères requise
};

export default BookListG;
