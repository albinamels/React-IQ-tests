import { useState } from "react";

export const Boxes = () => {
  const [boxes] = useState([1, 2, 3, 4, 5]);
  const [onHoverBox, setOnHoverBox] = useState(0);
  const [flag, setFlag] = useState(false); // to fix clicked box

  const handleHover = (box) => {
    setOnHoverBox(box);
    setFlag(false); // take onMouseLeave back in action
  };

  // yellow color should remain on fixed boxes
  const handleLeave = () => {
    if (!flag) {
      // if flag is false, onMouseLeave in action
      setOnHoverBox(0);
    }
  };

  const handleClick = (box) => {
    setOnHoverBox(box); // color boxes
    setFlag(true); // fix clicked box, to prevent onMouseLeave
  };

  return (
    <div className="stars-wrapper">
      {boxes.map((box) => {
        return (
          <div
            key={box}
            className="rating-box"
            style={{ background: box <= onHoverBox ? "#F7CE08" : null }}
            onMouseOver={() => handleHover(box)} // grab the number of box
            onMouseLeave={handleLeave}
            onClick={() => handleClick(box)}
          >
            {box}
          </div>
        );
      })}
    </div>
  );
};
