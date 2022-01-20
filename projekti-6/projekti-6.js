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
