window.onload = buttonFuntionality

function wordCreator(foo) {
    let text = document.createTextNode(`You chose ${foo}`)
    let place = document.getElementById("user-answer")
    place.appendChild(text)
}

function buttonPressed(btn) {
    btn.addEventListener("click", wordInitialiser(btn))
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
