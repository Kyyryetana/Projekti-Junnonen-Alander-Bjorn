const kortit = document.querySelectorAll('.kortti');

function flipKortti(){
  this.classList.toggle('flip');
}

(function shuffle(){
  kortit.forEach(kortti => {
    let random = Math.floor(Math.random() * 16);
    kortti.style.order = random;
  });
})();

kortit.forEach(kortti => kortti.addEventListener('click', flipKortti));

