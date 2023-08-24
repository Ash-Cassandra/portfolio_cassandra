import React from "react";

const Rating = ({ rating }) => {
  const MAX_RATING = 3;
  const percent = (rating / MAX_RATING) * 100;
  const remainingPercent = 100 - percent;

  return (
    <div className="ratingGauge" style={{ "--percent": `${remainingPercent}%` }}>    </div>
  );
};

export default Rating;