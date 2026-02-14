document.addEventListener("DOMContentLoaded", function () {

    const enterBtn = document.getElementById("enterBtn");
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");
    const message = document.getElementById("message");
    const heartBtn = document.getElementById("heartBtn");
    const final = document.getElementById("final");

    const text = "Tuki... you are the calm in my chaos, the light in my darkest days, the smile I never want to lose. I don’t just want you for Valentine’s Day. I want you for every tomorrow of my life.";

    let index = 0;

    enterBtn.addEventListener("click", function () {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            main.style.display = "block";
            main.style.opacity = "1";
            startTyping();
        }, 800);
    });

    function startTyping() {
        function type() {
            if (index < text.length) {
                message.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 35);
            }
        }
        type();
    }

    heartBtn.addEventListener("click", function () {
        final.style.display = "block";
        createFloatingHearts();
    });

    function createFloatingHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("floating-heart");
            heart.innerHTML = "💙";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (Math.random() * 20 + 15) + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);

        }, 300);
    }

});
