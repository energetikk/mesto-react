import React from "react";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src="#"
              alt="Фотография пользователя"
              className="profile__main-photo"
            />
            <button onClick={onEditAvatar}
              type="submit"
              className="profile__edit-button-avatar"
            ></button>
          </div>
          <div className="profile__heading">
            <div className="profile__title">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__addbutton"
        ></button>
      </section>
      <section className="places">
        <ul className="places__photo-cards"></ul>
      </section>
    </main>
  );
}

export default Main;
