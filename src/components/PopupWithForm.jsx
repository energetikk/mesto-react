import React from "react";

function PopupWithForm({name, title, children, textButton, isOpen, onClose}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : "" }`}>
        <div className="popup__container">
          <form name="info" className={`form form_${name}`} novalidate>
            <h2 className="form__title">{title}</h2>
            {/* <fieldset className="form__input-container">
              <input
                id="input-name"
                required
                minlength="2"
                maxlength="40"
                type="text"
                placeholder="Имя"
                name="nameuser"
                className="form__item form__item_el_name"
              />
              <span id="input-name-error" className="popup__error"></span>
              <input
                id="input-job"
                required
                minlength="2"
                maxlength="200"
                type="text"
                placeholder="О себе"
                name="jobuser"
                className="form__item form__item_el_job"
              />
              <span id="input-job-error" className="popup__error"></span>
            </fieldset> */}

            {children}

            <button type="submit" className="form__submit">
              {textButton}
            </button>
          </form>
          <button onClick={onClose} type="button" className="popup__button-close"></button>
        </div>
      </div>
    )
}

export default PopupWithForm;