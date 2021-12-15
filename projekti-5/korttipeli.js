const kortit = document.querySelectorAll('.kortti');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipKortti(){
  if (lockBoard) return;

  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    //ensimmäinen klikkaus
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //toinen klikkaus
    hasFlippedCard = false;
    secondCard = this;

    //onko parit?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      //on pari!
      firstCard.removeEventListener('click', flipKortti);
      secondCard.removeEventListener('click', flipKortti);
    } else {
      lockBoard = true;
      //ei pari :(
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
      }, 1500);
    }
  }
}

(function shuffle(){
  kortit.forEach(kortti => {
    let random = Math.floor(Math.random() * 16);
    kortti.style.order = random;
  });
})();

kortit.forEach(kortti => kortti.addEventListener('click', flipKortti));
