var korttiTaka = document.getElementsByClassName('card-back');
var korttiEtu = document.getElementsByClassName('card-front');
//
function sekoita(korttiEtu)
{
    korttiEtu.sort(function(a, b){return 0.5 - Math.random()});
    return korttiEtu;
}
