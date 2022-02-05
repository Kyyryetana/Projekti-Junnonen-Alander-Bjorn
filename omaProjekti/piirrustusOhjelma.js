const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Poistaa kaiken
function poista(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Kynän paksuuden säädin
ctx.lineWidth = 3;
const changeWidth = value => ctx.lineWidth = value;
ctx.lineCap = "round";
