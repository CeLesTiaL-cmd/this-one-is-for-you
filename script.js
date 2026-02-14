document.addEventListener("DOMContentLoaded", function () {

    const enterBtn = document.getElementById("enterBtn");
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");
    const message = document.getElementById("message");
    const heartBtn = document.getElementById("heartBtn");
    const final = document.getElementById("final");

    enterBtn.addEventListener("click", function () {
        intro.style.display = "none";
        main.style.display = "block";
        startTyping();
    });

    const text = "Tuki... you are the calm in my chaos, the light in my darkest days, the smile I never want to lose. I don’t just want you for Valentine’s Day. I want you for every tomorrow of my life.";

    let index = 0;

    function startTyping() {
        function type() {
            if (index < text.length) {
                message.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 40);
            }
        }
        type();
    }

    heartBtn.addEventListener("click", function () {
        final.style.display = "block";
    });

});
