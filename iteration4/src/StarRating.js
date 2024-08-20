import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars }) => {
    const [rating, setRating] = useState(stars);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (rating) ? "on" : "off"}
                        onClick={() => (stars === undefined) ? setRating(index) : setRating(rating)}
                    >
                        <span className="star"><FaStar /></span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;