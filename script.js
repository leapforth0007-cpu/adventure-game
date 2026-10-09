
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
}

renderQuestion();
