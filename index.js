let clicked = false

window.onload = buttonFuntionality

function wordCreator(foo) {
    if (!clicked) {
        clicked = true
        let place = document.getElementById("user-answer")
        // using innerHTML rather than appendText so that it rewrites the user's previous option
        place.innerHTML = `You chose ${foo}`

        // wait around a second before letting the user choose another icon
        setTimeout(() => {
            clicked = false
        }, 1000)
    }
}

function buttonPressed(btn) {
    btn.addEventListener("click", () => wordInitialiser(btn))
}

function buttonFuntionality() {
    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissors = document.getElementById("scissors")
    buttonPressed(rock)
    buttonPressed(paper)
    buttonPressed(scissors)
}

function wordInitialiser(btn) {
    switch (btn) {
        case rock:
            wordCreator("rock")
            break
        case paper:
            wordCreator("paper")
            break
        case scissors:
            wordCreator("scissors")
            break
        default:
            console.log("Something's wrong...")
    }
}

function computer() {

}
