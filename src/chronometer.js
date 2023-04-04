class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    //Interval that runs the function once per second
    this.intervalId = setInterval(() => {
      // Increment the current time by 1
      this.currentTime += 1;
      // If the callback function is passed as an argument, call it
      if (printTimeCallback) {
        printTimeCallback();
      }
      // If the callback function is not passed as an argument, do nothing
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString();
    if (valueString.length === 1) {
      return "0" + valueString.slice();
    }
    return valueString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`;
  }
}
