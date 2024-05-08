import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review';
import './Review.css';

export default function Reviews({ currentUserId }) {
    const [reviews, setReviews] = useState([]);

    const getReviews = () => {
        axios.get("http://localhost:5000/api/reviews")
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    };

    const deleteReview = (reviewId) => {
        axios.delete(`http://localhost:5000/api/reviews/${reviewId}`)
            .then(() => {
                setReviews(reviews.filter(review => review.idReview !== reviewId));
            })
            .catch(error => {
                console.error('Error deleting review:', error);
            });
    };
    

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <div className='Reviews'>
            <div className='Reviews-container'>
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <Review key={review.idReview} review={review} onDelete={deleteReview} />
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
}