import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRate = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const starColor = index < rating ? "yellow" : "gray";
        return (
          <>
            <FaStar key={index} onClick={() => handleClick(index)} style={{ color: starColor, cursor: "pointer", fontSize: "30px" }} />
          </>
        );
      })}
    </>
  );
};

export default StarRate;
