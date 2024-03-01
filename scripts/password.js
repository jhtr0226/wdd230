const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

ps2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (ps1.value !== ps2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        ps2.style.backgroundColor = "#fff0f3";
        ps2.value = "";
        ps2.focus();
    } else {
        message.style.display = "none";
        ps2.style.backgroundColor = "#fff";
        ps2.style.color = "#000";
    }
}