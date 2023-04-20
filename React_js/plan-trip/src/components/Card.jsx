import React, { useState } from "react";

const Card = ({ id, name, info, image, price,removeTour}) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info:`${info.substring(0, 200)}....`;

  const readmoreHandler=()=>{
    setReadmore(!readmore);
  };

  return (
    <div className="card">
      <img className="image" src={image} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span onClick={readmoreHandler} className="read-more">
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={()=>removeTour(id)}>Not Intrested</button>
    </div>
  );
};

export default Card;
