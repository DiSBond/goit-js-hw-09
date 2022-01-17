// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const timerInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button")
const days = document.querySelector("span[data-days]")
const hours = document.querySelector("span[data-hours]")
const minutes = document.querySelector("span[data-minutes")
const seconds = document.querySelector("span[data-seconds]")


let difference = 0;
let timer = null;
let chousedDate = 0;

startBtn.addEventListener('click', onStartBtnClick)

startBtn.disabled = true;

function calculateDifference(x, y) {
return Math.floor(x - y)
}

const date = new Date();
const time = date.getTime();
    
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  dateFormat: "Y-m-d H:i",
  onClose(selectedDates) {
      if (selectedDates[0].getTime() < time) {
        return window.alert("Please choose a date in the future")
      } 
      startBtn.disabled = false;
      chousedDate = selectedDates[0].getTime();
    //   console.log(chousedDate);
    },
};

// 1


function onStartBtnClick() {
     timer = setInterval(() => {
        const dateNow = new Date();
        const timeNow = dateNow.getTime()
        difference = calculateDifference(chousedDate, timeNow)
        let result = convertMs(difference);
         console.log(result);
         
         days.textContent = addLeadingZero(result.days);
         hours.textContent = addLeadingZero(result.hours);
         minutes.textContent = addLeadingZero(result.minutes);
         seconds.textContent = addLeadingZero(result.seconds);
    }, 1000);
  startBtn.disabled = true;
  timerInput.disabled = true;
}

function addLeadingZero(e) {
    const convert = `${e}`;
    return convert.padStart(2, "0");
  }
    

flatpickr(timerInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}





