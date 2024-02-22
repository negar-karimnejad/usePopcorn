/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

Star.propTypes = {
  maxRating: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  handleMovieRating: PropTypes.func,
};

function Star({
  maxRating = 5,
  size = 48,
  color = "yellow",
  messages = [],
  defaultRating = 0,
  handleMovieRating,
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(defaultRating);

  return (
    <div className="flex items-center min-h-7">
      {Array.from({ length: maxRating }, (_, i) => (
        <div key={i}>
          <div
            onMouseEnter={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
            className="cursor-pointer"
            onClick={() => {
              setRating(i + 1);
              handleMovieRating(i + 1);
            }}
          >
            {(hoverRating ? hoverRating >= i + 1 : rating >= i + 1) ? (
              <AiFillStar size={size} color={color} />
            ) : (
              <AiOutlineStar
                style={{ color: color }}
                size={size}
                stroke={color}
                border={color}
              />
            )}
          </div>
        </div>
      ))}
      <p style={{ color, fontSize: size / 1.2 }} className="ml-5 font-bold">
        {messages.length === maxRating
          ? messages[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || ""}
      </p>
    </div>
  );
}

export default Star;
