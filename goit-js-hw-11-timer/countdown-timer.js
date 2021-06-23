export class CountdownTimer {
  constructor(param) {
    this.selector = param.selector;
    this.targetDate = param.targetDate;
    this.intervalRet = null;
    this.daysRef = document.querySelector(this.selector+' .field [data-value="days"]');
    this.hoursRef = document.querySelector(this.selector+' .field [data-value="hours"]');
    this.minsRef = document.querySelector(this.selector+' .field [data-value="mins"]');
    this.secsRef = document.querySelector(this.selector+' .field [data-value="secs"]');
  }
  format(x) {
      return (x >= 10) ? x : "0" + x;
  }
  render() {
    const time = this.targetDate.getTime() - new Date().getTime();
    //console.log(time);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.daysRef.innerHTML = this.format(days);
    this.hoursRef.innerHTML = this.format(hours);
    this.minsRef.innerHTML = this.format(mins);
    this.secsRef.innerHTML = this.format(secs);
  }
  start() {
    if (this.intervalRet === null) {
      this.intervalRet = setInterval(() => {
        this.render();
      }, 1000);
    }
  }
  stop() {
    if (this.intervalRet != null) {
      clearInterval(this.intervalRet);
      this.intervalRet = null;
    }
  }
}
