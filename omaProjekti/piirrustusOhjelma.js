const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Poistaa kaiken
function poista(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
