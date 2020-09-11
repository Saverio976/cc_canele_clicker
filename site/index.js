var nb_canele = 0
var nb_four = 1

function NewCanele() {
    nb_canele += nb_four;
    let paragraphe = "Vous avez "+ nb_canele.toString() +" canelés";
    document.getElementById("nb_canelé").innerHTML = paragraphe;
}

function NewFour() {
    if (nb_canele >= 25) {
        nb_canele -= 25;
        nb_four += 1;
        let paragraphe = "Vous avez "+ nb_canele.toString() +" canelés";
        document.getElementById("nb_canelé").innerHTML = paragraphe;
        alert("You Got a New 'Four' !!");
    }
    else {
        alert("You haven't The Number OF Canelé !");
    }
}
