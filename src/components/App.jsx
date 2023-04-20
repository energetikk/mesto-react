import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
// import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmAvatarPopupOpen, setIsConfirmAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmAvatarPopupOpen(false);

    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="editprofile"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__input-container">
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
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="addprofile"
        title="Новое место"
        textButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__input-container">
          <input
            id="input-newplace"
            type="text"
            required
            minlength="2"
            maxlength="30"
            name="name"
            placeholder="Название"
            className="form__item form__item_place_name"
          />
          <span id="input-newplace-error" className="popup__error"></span>
          <input
            id="input-link"
            type="url"
            required
            name="link"
            placeholder="Ссылка на картинку"
            className="form__item form__item_place_link"
          />
          <span id="input-link-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="addavatarprofile"
        title="Обновить аватар"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__input-container">
          <input
            id="input-link-avatar"
            type="url"
            required
            name="link"
            placeholder="Ссылка на картинку"
            className="form__item form__item_avatar_link"
          />
          <span id="input-link-avatar-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        textButton="Да"
        isOpen={isConfirmAvatarPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
    </div>
  );
}

export default App;
