
const cards = ["der Tisch", "der Stüle", " das Bett", "die Lampe",
    "der Spülmaschine", "der Külschrank", "die Tür", "der Vorhang"];
const words = ["Table", "Chair", "Bed", "Lamp", "Dish washer", "Fridge", "Door", "Curtain"];


let first = null;
let second = null;

$(document).ready(function () {
    $(".two").hide();
    $(".mcard").click(function () {
        $(this).children(".one").toggle();
        $(this).children(".two").toggle();
        if (first === null) {
            first = this;
        } else if (second === null) {
            second = this;
        } else {
            $(first).children(".one").toggle();
            $(first).children(".two").toggle();
            $(second).children(".one").toggle();
            $(second).children(".two").toggle();
            first = this;
            second= null;
            
        }


    });
});


for (let i = 0; i < cards.length; i++) {
    $("#b" + (i + 1)).text(cards[i]);
}
for (let i = 0; i < cards.length; i++) {
    $("#b" + (i + 9)).text(words[i]);
}