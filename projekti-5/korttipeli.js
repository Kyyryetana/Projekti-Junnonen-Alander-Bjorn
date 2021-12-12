const kortit = document.querySelectorAll('.kortti');

function flipKortti(){
  this.classList.toggle('flip');
}

kortit.forEach(kortti => kortti.addEventListener('click', flipKortti));
