const kortit = document.querySelectorAll('.kortti');

function flipKortti(){
  this.classList.toggle('flip');
}

kortit.forEach(kortti => kortti.addEventListener('click', flipKortti));
// ei toimi vielä sekoitus (document is not defined)
function sekoita(kortit) {
    kortit.sort(function(a, b){return 0.5 - Math.random()});
    return kortit;
}
