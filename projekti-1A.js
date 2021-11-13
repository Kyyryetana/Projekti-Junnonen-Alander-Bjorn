//ÄLÄ MUUTA 2 ENSIMMÄISTÄ! ON TOIMIVAT KOODIT.
function tarkista(formi) {
  var kayttajatunnus = formi.kayttajatunnus.value;
  if (kayttajatunnus.length < 1) {
    alert("Käyttäjätunnus on liian lyhyt!");
  }
  var salasana = formi.salasana.value;
  if (salasana.length < 1) {
    alert("Salasana on liian lyhyt!");
  }
  var checkBoksit = formi.onkoMatelijaa_vastaus;
  //tänne tekeminen
  var tekstiKentta = formi.lisatietoja.value;
  //tänne tekeminen
  var pudotusvalikko = formi.pudotusvalikko.value;
  //tänne tekeminen
  var radionapit = formi.montakoMatelijaa_vastaus;
  //tänne tekeminen



}
