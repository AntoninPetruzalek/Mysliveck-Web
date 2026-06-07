document.addEventListener("DOMContentLoaded", () => {

    const gameArea = document.getElementById("gameArea");
    const scoreEl = document.getElementById("score");
    const crosshair = document.querySelector(".crosshair");
    const dogButton = document.getElementById("dogButton");

    if (!gameArea || !scoreEl || !crosshair) {
        console.error("Hra: chybí elementy");
        return;
    }

    let score = 0;

    // =========================
    // CROSSHAIR
    // =========================
    window.addEventListener("mousemove", (e) => {
        crosshair.style.left = e.clientX + "px";
        crosshair.style.top = e.clientY + "px";
    });

    // =========================
    // ZVÍŘATA
    // =========================
    const animals = [
        { icon: "🦌", points: 10 },
        { icon: "🐗", points: 15 },
        { icon: "🐇", points: 5 },
        { icon: "🦊", points: 12 },
        { icon: "🦡", points: 18 },
        { icon: "🫎", points: 25 }
    ];

    function spawnAnimal() {

        const data = animals[Math.floor(Math.random() * animals.length)];

        const animal = document.createElement("div");
        animal.textContent = data.icon;

        animal.style.position = "absolute";
        animal.style.fontSize = "50px";
        animal.style.cursor = "pointer";
        animal.style.zIndex = "10";

        const rect = gameArea.getBoundingClientRect();

        animal.style.left = Math.random() * (rect.width - 60) + "px";
        animal.style.top = Math.random() * (rect.height - 60) + "px";

        animal.addEventListener("click", () => {
            score += data.points;
            scoreEl.textContent = score;
            animal.remove();
        });

        gameArea.appendChild(animal);

        setTimeout(() => animal.remove(), 2500);
    }

    setInterval(spawnAnimal, 900);

    // =========================
    // PES
    // =========================
    if (dogButton) {
        dogButton.addEventListener("click", () => {

            if (score < 100) {
                alert("Nemáš dost bodů!");
                return;
            }

            score -= 100;
            scoreEl.textContent = score;

            document.querySelectorAll(".animal").forEach(a => a.remove());

            const dog = document.createElement("div");
            dog.textContent = "🐕";

            dog.style.position = "fixed";
            dog.style.left = "-200px";
            dog.style.bottom = "100px";
            dog.style.fontSize = "120px";
            dog.style.zIndex = "99999";
            dog.style.transition = "left 0.8s linear";

            document.body.appendChild(dog);

            setTimeout(() => dog.style.left = "120%", 10);
            setTimeout(() => dog.remove(), 900);
        });
    }

});