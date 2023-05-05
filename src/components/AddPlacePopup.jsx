import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onUpdateCards }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateCards({
      name: name,
      link: link,
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
            // ref={cardNameRef}
            onChange={handleChangeName}
            value={name || ""}
          />
          <span id="input-newplace-error" className="popup__error"></span>
          <input
            id="input-link"
            type="url"
            required
            name="link"
            placeholder="Ссылка на картинку"
            className="form__item form__item_place_link"
            // ref={cardLinkRef}
            onChange={handleChangeLink}
            value={link || ""}
          />
          <span id="input-link-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
    </div>
  );
}

export default AddPlacePopup;
