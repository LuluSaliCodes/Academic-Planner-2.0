import { PomodoroTimer } from "./pomodoro.js";

export function initializePomodoro() {
    const display = document.getElementById("timer-display");
    const startBtn = document.getElementById("start-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const resetBtn = document.getElementById("reset-btn");


    const timer = new PomodoroTimer();

    startBtn.addEventListener("click", () => {
        timer.start(
            (remaining) => updateDisplay(display, remaining),
            () => {
                display.textContent = "00:00";
            }
        );
    });

    pauseBtn.addEventListener("click", () => {
        timer.stop();
    });

    resetBtn.addEventListener("click", () => {
        timer.reset();
        display.textContent = "25:00";
    });
}

function updateDisplay(display, remaining) {
    display.textContent = formatTime(remaining);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.ceil(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}