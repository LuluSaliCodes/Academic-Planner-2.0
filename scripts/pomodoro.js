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
            const remaining = this.remainingTime - elapsed;

            onTick(Math.max(0, remaining));

            if (remaining <= 0) {
                this.stop();
                this.remainingTime = 0;

                if (onComplete) {
                    onComplete();
                }
            }
        }, 1000);
    }

    stop() {
        if (!this.isRunning) return;

        clearInterval(this.intervalId);
        const elapsed = Date.now() - this.startTime;
        this.remainingTime -= elapsed;
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