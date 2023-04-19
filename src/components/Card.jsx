import React from "react";




function Card({card, onCardClick}) {



  function handleCardClick() {
    onCardClick(card)
  } 

    return (
        <li>
          <figure className="places__element">
            <img className="places__photo" src={card.link} alt={card.name} onClick={handleCardClick}/>
            <figcaption className="places__card">
              <p className="places__card-name">{card.name}</p>
              <div className="places__like">
                <button type="button" className="places__button-like"></button>
                <p className="places__like-counter">{card.likes.length}</p>
              </div>
            </figcaption>
            <button type="button" className="places__card-delete"></button>
          </figure>
        </li>
    )
}

export default Card