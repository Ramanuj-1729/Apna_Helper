import React, { useState } from "react";
import styles from "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${
              index <= (hover || rating) ? styles.addColor : styles.removeColor
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <i className="fa-solid fa-star"></i>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
