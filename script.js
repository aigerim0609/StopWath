let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".min");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

let interval;

let seconds = 00;
let tens = 00;
let mins = 00;

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  let seconds = 00;
  let tens = 00;
  let mins = 00;

  getTens.innerHTML = "00";
  getSeconds.innerHTML = "00";
  getMins.innerHTML = "00";
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    getMins.innerHTML = "0" + mins;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (mins > 9) {
    getMins.innerHTML = mins;
  }
}
