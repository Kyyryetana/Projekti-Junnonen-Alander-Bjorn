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

//Värin vaihto
const changeColor = color => ctx.strokeStyle = color;

//Piirtäminen
let prevX = null
let prevY = null
ctx.lineWidth = 5
let piirto = false
// Piirrä kun hiiren klikkiä painetaan
window.addEventListener("mousedown", (e) => piirto = true)
//Elä piirrä kun hiiren klikkiä ei paina
window.addEventListener("mouseup", (e) => piirto = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !piirto){
        prevX = e.clientX
        prevY = e.clientY
        return
    }
    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})
