export class PomodoroTimer {
    constructor(duration = 25 * 60 * 1000) {
        this.duration = duration;
        this.remainingTime = duration;
        this.startTime = null;
        this.intervalId = null;
        this.isRunning = false;
    }

    start(onTick, onComplete) {

        if (this.isRunning) return;

        this.isRunning = true;

        this.startTime = Date.now();

        this.intervalId = setInterval(() => {

            const elapsed = Date.now() - this.startTime;
            this.remainingTime -= elapsed;
            this.startTime = Date.now();

            onTick(Math.max(0, this.remainingTime));

            if (this.remainingTime <= 0) {
                this.stop();
                this.remainingTime = 0;

                if (onComplete) {
                    onComplete();
                }
            }
        }, 250);
    }

    stop() {
        if (!this.isRunning) return;

        clearInterval(this.intervalId);
        this.isRunning = false;
    }

    reset() {
        clearInterval(this.intervalId);

        this.remainingTime = this.duration;
        this.startTime = null;
        this.isRunning = false;
    }

    getRemainingTime() {
        return this.remainingTime;
    }
}