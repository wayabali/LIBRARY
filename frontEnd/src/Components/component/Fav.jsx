import { useState } from "react"; // Supprimer l'importation non utilisée de React
import PropTypes from "prop-types"; // Importer PropTypes pour la validation des props
import axios from "axios";
import './FavHeart.css';

export default function Favorite({ id, userId }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const addToFavorites = () => {
    axios
      .post("http://localhost:5000/favoris", { booKID: id, userID: userId })
      .then(() => {
        setIsFavorited(true);
        alert("Book added to favorites!");
      })
      .catch((error) => {
        alert("An error occurred while adding the book to favorites");
        console.error(error);
      });
  };

  const removeFromFavorites = () => {
    axios
      .delete("http://localhost:5000/Favoris", { data: { idBook: id, idUser: userId } })
      .then(() => {
        setIsFavorited(false);
        alert("Book removed from favorites!");
      })
      .catch((error) => {
        alert("An error occurred while removing the book from favorites");
        console.error(error);
      });
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  return (
    <>
      <div className="heart-box">
        <label title="Add to Favourites" className="container-fav">
          <input type="checkbox" checked={isFavorited} onChange={handleToggleFavorite} />
          <div className="checkmark">
            <svg viewBox="0 0 256 256">
              <rect fill="none" height="200" width="200"></rect>
              <path
                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                strokeWidth="20px"
                stroke="#e17749"
                fill="none"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </>
  );
}

// Ajouter la validation des props avec PropTypes
Favorite.propTypes = {
  id: PropTypes.number.isRequired, // Valider que 'id' est un nombre requis
  userId: PropTypes.number.isRequired // Valider que 'userId' est un nombre requis
};
