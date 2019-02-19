let clicked = false
let computerChoice
let options = ['rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors']
let userChoice

window.onload = buttonFuntionality

function wordCreator(foo) {
    userChoice = foo
    // console.log(userChoice)
    if (!clicked) {
        // clicked = true
        let place = document.getElementById("user-answer")
        // using innerHTML rather than appendText so that it rewrites the user's previous option
        place.innerHTML = `You chose ${foo}`
        computer()
        verdict()

        // wait around a second before letting the user choose another icon
        // setTimeout(() => {
        //     clicked = false
        // }, 1000)
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
    computerChoice = options[Math.floor(Math.random() * options.length)]
    // console.log(computerChoice)
    let computerAnswer = document.getElementById("computer-answer")
    computerAnswer.innerHTML = `Computer chose ${computerChoice}`
}

function verdict() {
    let verdict = document.getElementById("verdict")
    // its a tie
    if (userChoice === 'rock' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'paper' || userChoice === 'scissors' && computerChoice === 'scissors')
        verdict.innerHTML = 'ITS A TIE!!!'
    // for paper
    else if (userChoice === 'paper' && computerChoice === 'rock')
        verdict.innerHTML = 'YOU WON!'
    else if (userChoice === 'paper' && computerChoice === 'scissors')
        verdict.innerHTML = 'YOU LOST!'
    // for rock
    else if (userChoice === 'rock' && computerChoice === 'paper')
        verdict.innerHTML = 'YOU LOST!'
    else if (userChoice === 'rock' && computerChoice === 'scissors')
        verdict.innerHTML = 'YOU WON!'
    // for scissors
    else if (userChoice === 'scissors' && computerChoice === 'rock')
        verdict.innerHTML = 'YOU LOST!'
    else if (userChoice === 'scissors' && computerChoice === 'paper')
        verdict.innerHTML = 'YOU WON!'
}
