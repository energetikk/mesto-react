import React from "react";

function Card() {
    return (
        <li>
          <figure className="places__element">
            <img className="places__photo" src="#" alt="..." />
            <figcaption className="places__card">
              <p className="places__card-name">Имя</p>
              <div className="places__like">
                <button type="button" className="places__button-like"></button>
                <p className="places__like-counter"></p>
              </div>
            </figcaption>
            <button type="button" className="places__card-delete"></button>
          </figure>
        </li>
    )
}

export default Card