

function App() {
  return (
    <div>
      
      <main>
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img
                src="#"
                // alt="Фотография пользователя"
                className="profile__main-photo"
              />
              <button
                type="submit"
                className="profile__edit-button-avatar"
              ></button>
            </div>
            <div className="profile__heading">
              <div className="profile__title">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__job">Исследователь океана</p>
            </div>
          </div>
          <button type="button" className="profile__addbutton"></button>
        </section>
        <section className="places">
          <ul className="places__photo-cards"></ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      </footer>
      <div className="popup popup_editprofile">
        <div className="popup__container">
          <form name="info" className="form form_editProfile" novalidate>
            <h2 className="form__title">Редактировать профиль</h2>
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
            <button type="submit" className="form__submit">
              Сохранить
            </button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_addprofile">
        <div className="popup__container">
          <form name="info" className="form form_addprofile" novalidate>
            <h2 className="form__title">Новое место</h2>
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
            <button type="submit" className="form__submit">
              Создать
            </button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

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

      <div className="popup popup_addavatarprofile">
        <div className="popup__container">
          <form name="info" className="form form_editavatarprofile" novalidate>
            <h2 className="form__title">Обновить аватар</h2>
            <fieldset className="form__input-container">
              <input
                id="input-link-avatar"
                type="url"
                required
                name="link"
                placeholder="Ссылка на картинку"
                className="form__item form__item_avatar_link"
              />
              <span
                id="input-link-avatar-error"
                className="popup__error"
              ></span>
            </fieldset>
            <button type="submit" className="form__submit">
              Сохранить
            </button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_confirm">
        <div className="popup__container">
          <form name="info" className="form form_confirm" novalidate>
            <h3 className="form__title">Вы уверены?</h3>
            <button type="submit" className="form__submit form__submit-confirm">
              Да
            </button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <template id="template-cards">
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
      </template>
    </div>
  );
}

export default App;
