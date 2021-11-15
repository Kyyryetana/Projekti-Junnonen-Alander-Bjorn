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
  /*
  var checkBoksit = formi.onkoMatelijaa_vastaus;
  if (
    formi.onkoMatelijaa_vastaus1.checked == false &&
    formi.onkoMatelijaa_vastaus2.checked == false &&
    formi.onkoMatelijaa_vastaus3.checked == false &&
    formi.onkoMatelijaa_vastaus4.checked == false &&
    formi.onkoMatelijaa_vastaus5.checked == false &&
    formi.onkoMatelijaa_vastaus6.checked == false)
    {
      alert("Valitse joku valintaruutu!")
      return false;
  } else {
          return true;
  }
*/

//checkboxit
  var checkBox = formi.onkoMatelijaa_vastaus;
  var checkTest = false;
  for(var i = 0; i < checkBox.length; i++) {
    if(checkBox[i].checked == true) {
      checkTest = true;
      }
    } if(checkTest == false) {
      alert("Valitse matelija tai jokin muu!");
    }


  // var tekstiKentta = formi.lisatietoja.value;
  // //tänne tekeminen
  // var pudotusvalikko = formi.pudotusvalikko.value;
  // //tänne tekeminen

//radionapit
  var radionapit = formi.montakoMatelijaa_vastaus;
  var radioTest = false;
  for(var j = 0; j < radionapit.length; j++) {
    if(radionapit[j].checked == true) {
      radioTest = true;
      }
  } if(radioTest == false) {
    alert("Valitse matelijoiden määrä!");
  }



}
