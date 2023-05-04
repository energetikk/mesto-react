import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function AddPlacePopup({ isOpen, onClose, onUpdateCards }) {
  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateCards({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <div>
      <PopupWithForm
        name="addprofile"
        title="Новое место"
        textButton="Создать"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <fieldset className="form__input-container">
          <input
            id="input-newplace"
            type="text"
            required
            minLength="2"
            maxLength="30"
            name="name"
            placeholder="Название"
            className="form__item form__item_place_name"
            ref={cardNameRef}
          />
          <span id="input-newplace-error" className="popup__error"></span>
          <input
            id="input-link"
            type="url"
            required
            name="link"
            placeholder="Ссылка на картинку"
            className="form__item form__item_place_link"
            ref={cardLinkRef}
          />
          <span id="input-link-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
    </div>
  );
}

export default AddPlacePopup;
