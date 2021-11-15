//käyttäjätunnukset
function tarkista(formi) {
  var kayttajatunnus = formi.kayttajatunnus.value;
  if (kayttajatunnus.length < 1) {
    alert("Käyttäjätunnus on liian lyhyt!");
  }
  var salasana = formi.salasana.value;
  if (salasana.length < 1) {
    alert("Salasana on liian lyhyt!");
  }

//checkboxit
  var checkBox = formi.onkoMatelijaa_vastaus;
  var checkTest = false;
  for(var i = 0; i < checkBox.length; i++) {
    if(checkBox[i].checked == true) {
      checkTest = true;
      }
    } if(checkTest == false) {
      alert("Valitse omistatko matelijan!");
    }

//dropdown
    var pudotusvalikko = document.getElementById('kukaOlet');
    var eiValittu = pudotusvalikko.options[pudotusvalikko.selectedIndex].text;
      if(eiValittu == "")
    {
      alert("Valitse oletko keräilijä tai jokin muu!");
    }

 //radionapit
  var radionapit = formi.montakoMatelijaa_vastaus;
  var radioTest = false;
  for(var j = 0; j < radionapit.length; j++) {
    if(radionapit[j].checked == true) {
      radioTest = true;
      }
  } if(radioTest == false) {
    alert("Valitse montako matelijaa omistat!");
  }}
