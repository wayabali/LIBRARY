import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';
import axios from 'axios';
import '../component/Rating.css';
import { IoSendOutline } from "react-icons/io5";

export default function RateReview({currentIdUser}) {

    /*rating and reviews handling and rendering*/
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [bookReview, setBookReview] = useState("");

    const getDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0'); 
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };
    

    const submitRateReview = () => {
        axios.post("http://localhost:5174/api/insert", { Rated: rating, bookReview,createdTime : getDate(),IdUser: currentIdUser})
            .then(() => {
                alert("Rate and review submitted successfully");
            })
            .catch((error) => {
                alert("An error occurred while submitting the rate and review");
                console.error(error);
            });
    };

  
    

    return (
        <>
            <div className="star-rating">
                {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                style={{ display: 'none' }}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? 'gold' : 'gray'}
                                size={20}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                    );
                })}
                <p><b>{rating}/5</b></p>
                <div className="commentForm">
            <h3 className="R">Review:</h3>
                <textarea
                    placeholder="Write your review..."
                    value={bookReview}
                    onChange={(e) => setBookReview(e.target.value)}
                />
                <button className="Submit" onClick={submitRateReview}>
                <IoSendOutline />
            </button>
        </div>
            </div>
        </>
    );
}