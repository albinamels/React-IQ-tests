import { FaStar } from "react-icons/fa"; // npm install react-icons --save
import { useState } from "react";

export const Stars = () => {
  const stars = new Array(5).fill("star");
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [flag, setFlag] = useState(false);

  const handleHover = (index) => {
    setHoveredStar(index);
    setFlag(false);
  };

  const handleLeave = () => {
    if (!flag) {
      setHoveredStar(-1);
    }
  };

  const handleClick = (index) => {
    setHoveredStar(index);
    setFlag(true); // fix clicked star to prevent onMouseLeave
  };

  return (
    <div className="stars-wrapper">
      {stars.map((star, index) => {
        return (
          <FaStar
            key={index}
            style={{
              color: index <= hoveredStar ? "#F7CE08" : null,
            }}
            onMouseOver={() => handleHover(index)} // grab the index of star
            onMouseLeave={handleLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};
