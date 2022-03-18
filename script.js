
const cards = ["der Tisch", "der Stüle", " das Bett", "die Lampe", 
    "der Spülmaschine","der Külschrank"];



$(document).ready(function () {
    $(".two").hide();
    $(".mcard").click(function () {
        $(this).children(".one").toggle();
        $(this).children(".two").toggle();
    });
});
