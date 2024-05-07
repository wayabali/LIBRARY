import React, { useState } from 'react';
import axios from 'axios';

export default function FormReview() {
    
/*review form*/

    return (
        <div className="comment">
            <h3 className="R">Review:</h3>
            <textarea
                placeholder="Leave your review here."
                
            />
            <button className="Submit" >
                <img src="./white-arrow.png" alt="White-Arrow" />
            </button>
        </div>
    );
}