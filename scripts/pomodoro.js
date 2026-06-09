const timer = {
    duration: 25 * 60 * 1000, //1000 is because Date.now() returns time in milliseconds
    startTime: null
}

export function startTimer() {
    timer.startTime = Date.now();
}

export function updateTimeDisplay() {
    const elapsed = Date.now() - timer.startTime;
    const remaining = timer.duration - elapsed;
}