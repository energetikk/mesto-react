import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserAvatar(user.avatar);
        setUserDescription(user.about);
        setCards(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src={userAvatar}
              alt="Фотография пользователя"
              className="profile__main-photo"
            />
            <button
              onClick={onEditAvatar}
              type="submit"
              className="profile__edit-button-avatar"
            ></button>
          </div>
          <div className="profile__heading">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__addbutton"
        ></button>
      </section>
      <section className="places">
        <ul className="places__photo-cards">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
