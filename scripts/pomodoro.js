export class PomodoroTimer {
    constructor(duration = 25 * 60 * 1000) {
        this.duration = duration;
        this.startTime = null;
        this.intervalId = null;
    }

    start(onTick, onComplete) {
        this.startTime = Date.now();

        this.intervalId = setInterval(() => {
            const remaining = this.getRemainingTime();

            onTick(remaining);

            if (remaining <= 0) {
                this.stop();

                if (onComplete) {
                    onComplete();
                }
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    getRemainingTime() {
        const elapsed = Date.now() - this.startTime;
        return Math.max(0, this.duration - elapsed);
    }
}