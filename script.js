
let currentState = "start";

function addAnswerButton(text, nextState) {
    let button = document.createElement("button");
    button.textContent = text;

    button.addEventListener("click", function() {
        currentState = nextState;
        renderQuestion();
    });

    document.getElementById("answers").appendChild(button);
}

function renderQuestion() {
    let question = document.getElementById("question");
    let answers = document.getElementById("answers");

    answers.innerHTML = "";

    if (currentState === "start") {
        question.textContent =
            "You are on an island. Where do you want to go?";

        addAnswerButton("Forest", "forest");
        addAnswerButton("Cave", "cave");
        addAnswerButton("Beach", "beach");
    }

    if (currentState === "forest") {
        question.textContent =
            "You enter the forest. You see a river and some animal tracks.";

        addAnswerButton("Follow River", "river");
        addAnswerButton("Follow Tracks", "tracks");
    }

    if (currentState === "cave") {
        question.textContent =
            "You enter a dark cave. There are two tunnels.";

        addAnswerButton("Left Tunnel", "left");
        addAnswerButton("Right Tunnel", "right");
    }

    if (currentState === "beach") {
        question.textContent =
            "You reach the beach. You see some rocks and an old boat.";

        addAnswerButton("Search Rocks", "rocks");
        addAnswerButton("Explore Boat", "boat");
    }

    if (currentState === "river") {
        question.textContent =
            "You find a bridge near the river. What will you do?";

        addAnswerButton("Cross Bridge", "bridge");
        addAnswerButton("Stay Here", "lost");
    }

    if (currentState === "tracks") {
        question.textContent =
            "The tracks lead to an old wooden house.";

        addAnswerButton("Enter House", "house");
        addAnswerButton("Go Back", "forest");
    }

    if (currentState === "left") {
        question.textContent =
            "You find a locked treasure box inside the tunnel.";

        addAnswerButton("Open Box", "treasure");
        addAnswerButton("Leave Box", "lost");
    }

    if (currentState === "right") {
        question.textContent =
            "You see a sleeping bear inside the cave.";

        addAnswerButton("Walk Quietly", "escape");
        addAnswerButton("Wake Bear", "lost");
    }

    if (currentState === "rocks") {
        question.textContent =
            "You find a small key under a rock.";

        addAnswerButton("Keep Key", "key");
        addAnswerButton("Leave Key", "lost");
    }

    if (currentState === "boat") {
        question.textContent =
            "You find an old map inside the boat.";

        addAnswerButton("Follow Map", "treasure");
        addAnswerButton("Ignore Map", "lost");
    }

    if (currentState === "bridge") {
        question.textContent =
            "You cross the bridge and find a hidden treasure chest! You win!";
    }

    if (currentState === "house") {
        question.textContent =
            "Inside the house, you find gold coins! You win!";
    }

    if (currentState === "treasure") {
        question.textContent =
            "You discover a chest full of gold! You win!";
    }

    if (currentState === "escape") {
        question.textContent =
            "You escape the cave safely. Your adventure is complete!";
    }

    if (currentState === "key") {
        question.textContent =
            "The key opens a hidden chest on the beach. You win!";
    }

    if (currentState === "lost") {
        question.textContent =
            "You get lost on the island. Game over!";
    }
}

document.getElementById("restart").addEventListener("click", function() {
    currentState = "start";
    renderQuestion();
});

renderQuestion();
