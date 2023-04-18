import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_cardfullscreen">
        <div className="popup__container-photo">
          <figure className="popup__card-fullscreen">
            <img className="popup__card-photo" src="#" alt="..." />
            <figcaption className="popup__card-information">
              <p className="popup__card-location"></p>
            </figcaption>
          </figure>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>        
    )
}

export default ImagePopup;