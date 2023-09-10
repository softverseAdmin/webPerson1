import React from "react";
import './Cards.css';

const CardAnimatedBorderGradient = ({customer, url, img}) => {
  return (
    <div className="card">
      <span className="borderGradient" />
      <div
        className="textContent border"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};

export default CardAnimatedBorderGradient;
