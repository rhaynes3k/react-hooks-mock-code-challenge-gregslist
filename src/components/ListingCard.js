import React from "react";
import {useState} from 'react'

function ListingCard({card, itemDeleteHandle}) {
  console.log(card)

  const [fav, setFav] = useState(false)
  console.log(fav)

  const handleDelete = () => {
    fetch('http://localhost:6001/listings/'+card.id,{
    method: 'DELETE'
    })
    itemDeleteHandle(card.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={() => setFav(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFav(true)}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
