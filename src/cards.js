import "./cards.css";
import aurelia from "./assets/aurelia.svg";
import jsBadge from "./assets/js-badge.svg";
import angular from "./assets/angular.svg";
import backBone from "./assets/backbone.svg";
import ember from "./assets/ember.svg";
import react from "./assets/react.svg";
import vue from "./assets/vue.svg";
import { useEffect, useState } from "react";

function App() {
  const [winningNum, setWinningNum] = useState(0);
  const [cards, setCards] = useState([]);
  const [hasFlippedCard, setFlippedCard] = useState(false);
  const [lockBoard, setlock] = useState(false);
  const [firstCard, setFirstCard] = useState("");
  let secondCard;
  let idArray = [];

  useEffect(() => {
    let card = document.querySelectorAll(".memory-card");
    setCards(card);
  }, []);

  useEffect(() => {
    shuffle();
  }, [cards]);

  function shuffle() {
    cards.forEach((card) => {
      let randomNum = Math.floor(Math.random() * 12);
      card.style.order = randomNum;
    });
  }

  function flipCard(e) {
    if (lockBoard) return;
    if (document.getElementById(e) === firstCard) return;
    if (idArray.includes(e) === false) {
      document.getElementById(e).classList.add("flip");
      if (!hasFlippedCard) {
        // first click
        setFirstCard(document.getElementById(e).id);
        setFlippedCard(true);
        return;
      }
      // second click
      secondCard = document.getElementById(e).id;
      checkResult();
    }
  }

  function checkResult() {
    let isMatch = `${firstCard}${firstCard}` === secondCard;
    let isMatch2 = `${secondCard}${secondCard}` === firstCard;
    if (isMatch === true || isMatch2 === true) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  function disableCards() {
    idArray.push(firstCard);
    idArray.push(secondCard);
    setFlippedCard(false);
    setFirstCard("");
    secondCard = "";
    checkWinner();
  }

  function unflipCards() {
    setlock(true);
    setTimeout(() => {
      document.getElementById(firstCard).classList.remove("flip");
      document.getElementById(secondCard).classList.remove("flip");
      setFlippedCard(false);
      setFirstCard("");
      secondCard = "";
      setlock(false);
    }, 1000);
  }

  function checkWinner() {
    let newCards = [];
    cards.forEach((data) => {
      let check = data.classList.contains("flip");
      if (check === true) {
        newCards.push(true);
        return true;
      } else {
        return false;
      }
    });
    if (cards.length === newCards.length) {
      // console.log("winner");
      setWinningNum(winningNum + 1);
      setTimeout(() => {
        alert("Congrats !!! You Win The Game");
      }, 1000);
      setTimeout(() => {
        resetPage();
      }, 2000);
    }
  }

  function resetPage() {
    cards.forEach((card) => {
      card.classList.remove("flip");
    });
    shuffle();
    idArray = [];
  }

  return (
    <div className="container">
      <div className="scoreBoard">
        <button id="reset" onClick={resetPage}>
          Reset Board
        </button>
        <div>YOUR SCORE IS: {winningNum}</div>
      </div>
      <section className="memory-game">
        <div
          className="memory-card"
          data-framework="aurelia"
          id="1"
          onClick={() => flipCard("1")}
        >
          <img className="front-face" src={aurelia} alt="Aurelia" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="aurelia"
          id="11"
          onClick={(e) => flipCard("11")}
        >
          <img className="front-face" src={aurelia} alt="Aurelia" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="vue"
          id="2"
          onClick={(e) => flipCard("2")}
        >
          <img className="front-face" src={vue} alt="Vue" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="vue"
          id="22"
          onClick={(e) => flipCard("22")}
        >
          <img className="front-face" src={vue} alt="Vue" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="angular"
          id="3"
          onClick={(e) => flipCard("3")}
        >
          <img className="front-face" src={angular} alt="Angular" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="angular"
          id="33"
          onClick={(e) => flipCard("33")}
        >
          <img className="front-face" src={angular} alt="Angular" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="ember"
          id="4"
          onClick={(e) => flipCard("4")}
        >
          <img className="front-face" src={ember} alt="Ember" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="ember"
          id="44"
          onClick={(e) => flipCard("44")}
        >
          <img className="front-face" src={ember} alt="Ember" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="backbone"
          id="5"
          onClick={(e) => flipCard("5")}
        >
          <img className="front-face" src={backBone} alt="Backbone" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="backbone"
          id="55"
          onClick={(e) => flipCard("55")}
        >
          <img className="front-face" src={backBone} alt="Backbone" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="react"
          id="6"
          onClick={(e) => flipCard("6")}
        >
          <img className="front-face" src={react} alt="React" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
        <div
          className="memory-card"
          data-framework="react"
          id="66"
          onClick={(e) => flipCard("66")}
        >
          <img className="front-face" src={react} alt="React" />
          <img className="back-face" src={jsBadge} alt="JS Badge" />
        </div>
      </section>
    </div>
  );
}

export default App;
