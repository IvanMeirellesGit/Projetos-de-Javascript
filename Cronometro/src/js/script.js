const minutesEl = document.querySelector(`#minutes`)
const secondsEl = document.querySelector(`#seconds`)
const milisecondsEl = document.querySelector(`#miliseconds`)
const startbtn = document.querySelector(`#startbtn`)
const resumebtn = document.querySelector(`#resumebtn`)
const pausebtn = document.querySelector(`#pausebtn`)
const resetbtn = document.querySelector(`#resetbtn`)

let interval
let minutes = 00
let seconds = 00
let miliseconds = 000
let isPaused = false

startbtn.addEventListener("click", startTimer)

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++
                miliseconds = 0
            }
            if (seconds === 60) {
                minutes++
                seconds = 0
            }
        }

        milisecondsEl.textContent = miliseconds
        secondsEl.textContent = seconds
        minutesEl.textContent = minutes
    }, 10)
}

function formatTime(time)
