import React from "react";

function PopupWithForm({name, title, children, textButton, isOpen, onClose}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : "" }`}>
        <div className="popup__container">
          <form name="info" className={`form form_${name}`} noValidate>
            <h2 className="form__title">{title}</h2>
            {children}
            <button type="submit" className="form__submit">{textButton}</button>
          </form>
          <button onClick={onClose} type="button" className="popup__button-close"></button>
        </div>
      </div>
    )
}

export default PopupWithForm;