import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmAvatarPopupOpen, setIsConfirmAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  
  React.useEffect(() => {
    api.getInitialCards()
      .then((card) => {
      setCards(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      console.log(newCard)
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    });
}


// function handleCardLike(card) {
//   const isLiked = card.likes.some((i) => i._id === currentUser._id);

//   isLiked
//     ? api
//         .removeLike(card._id, !isLiked)
//         .then((newCard) => {
//           setCards((state) =>
//             state.map((c) => (c._id === card._id ? newCard : c))
//           );
//         })
//         .catch((err) => {
//           console.log(`Ошибка: ${err}`);
//         })
//     : api
//         .setLike(card._id, !isLiked)
//         .then((newCard) => {
//           setCards((state) =>
//             state.map((c) => (c._id === card._id ? newCard : c))
//           );
//         })
//         .catch((err) => {
//           console.log(`Ошибка: ${err}`);
//         });
// }



function handleUpdateUser(value) {
  console.log(value)
  api.setUserInfo(value)
  .then((res) => {
    setCurrentUser(res);
    closeAllPopups();
  })
}




  function handleCardDelete(card) {
    console.log('test')
    console.log(card._id)
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
    
  }

  function handleUpdateAvatar(card) {
    console.log(card)
    api.setAvatar(card)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }


  function handleAddPlaceSubmit(card) {
    api.addCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCards={handleAddPlaceSubmit} />
      {/* <PopupWithForm
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
            minLength="2"
            maxLength="40"
            type="text"
            placeholder="Имя"
            name="nameuser"
            className="form__item form__item_el_name"
          />
          <span id="input-name-error" className="popup__error"></span>
          <input
            id="input-job"
            required
            minLength="2"
            maxLength="200"
            type="text"
            placeholder="О себе"
            name="jobuser"
            className="form__item form__item_el_job"
          />
          <span id="input-job-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm> */}
      {/* <PopupWithForm
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
            minLength="2"
            maxLength="30"
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
      </PopupWithForm> */}
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />

      {/* <PopupWithForm
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
      </PopupWithForm> */}

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        textButton="Да"
        isOpen={isConfirmAvatarPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
