import React, { useState } from "react";

function SingleTour({ id, name, price, info, image, removeItem }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div id={id} className="single-item">
      <img src={image} alt={name} />
      <div className="item-content">
        <div className="item-title-div">
          <h3 className="item-title">{name}</h3>
          <h3 className="item-price">${price}</h3>
        </div>
        <p className="description">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="show-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "read less" : "read more"}
          </button>
        </p>
        <button
          className="no-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          not interested
        </button>
      </div>
    </div>
  );
}

export default SingleTour;
