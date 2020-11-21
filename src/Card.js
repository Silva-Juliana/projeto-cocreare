import React from 'react'

const Card = ({ cardImage }) => {
    console.log(cardImage)
    return (
    <div className="card">
      <img src={cardImage} alt="cardImage" />
    </div>
  );
    }
  
  export default Card;