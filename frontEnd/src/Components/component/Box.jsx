import Favorite from "../../Components/component/Fav";
import RateReview from "../component/RatingReview";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Box({ indexe }) {
    const [bookInfo, setBookInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newReviewText, setNewReviewText] = useState('');

    const getBook = () => {
        axios.get("http://localhost:5174/api/bookInfos")
            .then(response => {
                setBookInfos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book infos:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getBook();
    }, []);

     // hadi t3 bch yjou reviews bla refresh bsshh mabghatch tetmecha
    const handleAddReview = () => {
        axios.post("http://localhost:5174/api/reviews", { text: newReviewText })
            .then(response => {
                const newReview = response.data;
                setBookInfos(prevBookInfo => prevBookInfo.map(book => {
                    if (book.id === newReview.bookId) {
                        return {
                            ...book,
                            reviews: [...book.reviews, newReview]
                        };
                    }
                    return book;
                }));
                setNewReviewText('');
            })
            .catch(error => {
                console.error('Error adding review:', error);
            });
    };


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="Box">
                {bookInfo.map((book, index) => (
                    <div key={index}>
                        <div className="bookSection">
                            <div><Favorite id={1} userId={12} /></div>
                            <img src={book.ImageURL} alt="book Image" />
                            <a href={book.Shop_link} target="_blank" rel="noopener noreferrer" className="bookLink">Shop Link</a>
                        </div>
                        <div className="bookInfo">
                            <div className="authorIMG" alt="author image"><img src={book.AuthorImageURL} alt="Author image" /></div>
                            <ul>
                                <li><h2>{book.BookTitle}</h2></li>
                                <li><h4>{book.AuthorName}</h4></li>
                            </ul>
                            <div className="BookDes">
                                <h4>Book Description:</h4>
                                <p className="description">{book.Book_Description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="reviews-form">
                    <h3>Rate:</h3>
                    <RateReview currentIdUser={12} />
                    
                </div>
            </div>
        </>
    );
}

export default Box;