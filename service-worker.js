// ==========================================
// PRABHU BUS APP
// ==========================================

// Carris live bus-stop URL
const CARRIS_URL =
    "https://paragem.alx.carris.pt/busstop/12111";


// ==========================================
// OPEN CARRIS
// ==========================================

function openCarris() {

    // Open the Carris page only when
    // the user presses the button.

    window.location.href = CARRIS_URL;
}


// ==========================================
// APP STARTUP
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("PRABHU BUS app loaded.");

});


// ==========================================
// BUTTON EFFECT
// ==========================================

const button = document.querySelector(".open-button");

if (button) {

    button.addEventListener("touchstart", function () {

        button.style.transform = "scale(0.96)";

    });

    button.addEventListener("touchend", function () {

        button.style.transform = "scale(1)";

    });

}