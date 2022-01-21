function store() {
  //kerää tiedot
  let avain = document.getElementById('avain').value;
  let omistaja = document.getElementById('tili').value;
  let pankki = document.getElementById('pankki').value;
  let saldo = document.getElementById('saldo').value;

  const pankkiTili = {
    nimi: omistaja,
    pankinNimi: pankki,
    tilinSaldo: saldo
  }
  window.localStorage.setItem(avain,JSON.stringify(pankkiTili));
  //muuttaa objekstin stringiksi ja tallentaa tiedot
}
function haeTiedot() {
//hakee tiedot paikallisesta arkistosta
var avain = document.getElementById('hakuavain').value; //käyttäjän antama avain
var tiedot = window.localStorage.getItem(avain); //Etsii avainta paikallisesta arkistosta
var teksti = document.createElement("p");
var tiedot = document.createTextNode(tiedot);
teksti.appendChild(tiedot);
var elementti = document.getElementById("haut");
elementti.appendChild(teksti);
}
function poistaYksi() {
//poistaa avaimen paikallisesta arkistosta
var avain = document.getElementById('poistaAvain').value; //käyttäjän antama avain
localStorage.removeItem(avain);
alert("Avaimen tiedot poistettu!")
}

function poistaKaikki() {
  localStorage.clear()
  alert("Kaikki tiedot poistettu!");
}

window.onload =function() { //laittaa napit toimimaan HTML:n ID:llä
  document.getElementById('haeArkistosta').onclick = haeTiedot
  document.getElementById('poistaNappi').onclick = poistaYksi
  document.getElementById('poistaKaikkiNappi').onclick = poistaKaikki
}
