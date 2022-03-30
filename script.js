
const german_words = ["der Tisch", "der Stüle", " das Bett", "die Lampe",
    "der Spülmaschine", "der Külschrank", "die Tür", "der Vorhang"];
const english_words = ["Table", "Chair", "Bed", "Lamp", "Dish washer", "Fridge", "Door", "Curtain"];

const match = {};
for (let i = 0; i < german_words.length; i++) {
    match[german_words[i]] = english_words[i];
    match[english_words[i]] = german_words[i];
}

console.log(match);

let first = null;
let second = null;


function toggle_mcard(mcard) {
    $(mcard).children(".one").toggle();
    $(mcard).children(".two").toggle();
}

function is_matching_mcards(first, second) {

    let first_word = $(first).children("div.two").text();
    let second_word = $(second).children("div.two").text();

    let matching_word = match[first_word];
    if (matching_word === second_word) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {
    $(".two").hide();
    $(".mcard").click(function () {
        toggle_mcard(this);

        if (first === null) {
            first = this;
        } else if (second === null) {
            second = this;
            if (is_matching_mcards(first, second)) {
                console.log("the cards are matching");
                first = null;
                second = null;
            } else {
                console.log("the cards are not matching");
            }
        } else {
            toggle_mcard(first);
            toggle_mcard(second);
            first = this;
            second = null;
        }
    });
});


for (let i = 0; i < german_words.length; i++) {
    $("#b" + (i + 1)).text(german_words[i]);
}
for (let i = 0; i < english_words.length; i++) {
    $("#b" + (i + (german_words.length + 1))).text(english_words[i]);
}