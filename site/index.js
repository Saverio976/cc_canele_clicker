var nb_canele = 0

function NewCanele() {
    nb_canele += 1
    let paragraphe = "Vous avez "+ nb_canele.toString() +" canelés";
    document.getElementById("nb_canelé").innerHTML = paragraphe;
}

function NewFour() {
    if (nb_canele >= 25) {
        nb_canele - 25
        alert("You Got a New 'Four' !!")
    }
    else {
        alert("You haven't The Number OF Canelé !")
    }
}
