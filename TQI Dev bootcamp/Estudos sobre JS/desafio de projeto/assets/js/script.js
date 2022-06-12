const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let wrongMoves = document.getElementsByTagName("p")[0];
let resetButton = document.getElementById("reset-btn");
let bestScore = document.getElementById("best-score");
let winText = document.getElementById("endgame");


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
}

function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    boardCheck();
    return;
  }
  unflipCards();
  boardCheck();
}

function disableCards() {
  firstCard.classList.add("finished");
  secondCard.classList.add("finished");

  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    wrongMoves.innerHTML = Number(wrongMoves.innerHTML) + 1;
    resetBoard();
  }, 1000);

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(shuffle = function shuffle() {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function boardCheck() {
  let cardsFinished = 0;
  cards.forEach(card => {
    if (card.classList.contains("finished")) {
      cardsFinished = cardsFinished + 1;
    }
  });
  console.log(cardsFinished);
  if (cardsFinished === cards.length) finishGame();
}

function finishGame() {
  winText.style.visibility = "visible";
  resetButton.style.visibility = "visible";
  bestScoreSetter();
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  winText.style.visibility = "hidden";

  wrongMoves.innerHTML = 0;
  cards.forEach((card) => {
    card.classList.remove("finished", "flip");
  });
  lockBoard = true;
  setTimeout(() => {
    shuffle();
    lockBoard = false;
  }, 1000);
}

function bestScoreSetter() {
  if(wrongMoves.innerHTML < bestScore.innerHTML) bestScore.innerHTML = wrongMoves.innerHTML;
}