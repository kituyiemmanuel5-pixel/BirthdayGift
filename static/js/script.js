console.log("Birthday Gift JavaScript is working!");
let enteredPin = "";
function pressKey(number) {
    if (enteredPin.length < 4) {
        enteredPin = enteredPin + number;
        console.log(enteredPin);
        updatePinDisplay();
    }
}    
function checkPin() {
    if (enteredPin === "2026") {
        console.log("Unlocked! ❤️");;
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("welcomeScreen").style.display = "flex";
    } else {
        alert("Wrong PIN 😏");
    }
}
function clearPin() {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDisplay();
    console.log(enteredPin);
}
function updatePinDisplay() {
    let dots = document.querySelectorAll(".pin-display span");

    for (let i = 0; i < dots.length; i++) {
        if (i < enteredPin.length) {
            dots[i].textContent = "●";
        } else {
            dots[i].textContent = "○";
        }
    }
}
function startGift() {
    document.getElementById("birthdayMusic").play();

    document.getElementById("welcomeScreen").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("welcomeScreen").style.display = "none";

        const giftScreen = document.getElementById("giftScreen");
        giftScreen.style.display = "flex";

        setInterval(createHeart, 500);
        setInterval(createSparkle, 300);
    }, 1200);
}
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}
function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

