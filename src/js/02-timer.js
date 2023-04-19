// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputTime: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours : document.querySelector('[data-hours]'),
    minutes : document.querySelector('[data-minutes]'),
    seconds : document.querySelector('[data-seconds]'),
}

refs.startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
        alert('Please choose a date in the future');
        return;
      } else {
          refs.startButton.disabled = false;
          refs.startButton.addEventListener("click", startCountdown);
          function startCountdown(evt) {
              refs.startButton.disabled = true;
                  const countDownTimer = setInterval(() => {
                timeDiff = selectedDates[0] - new Date(); // різниця в часі
                // console.log(timeDiff); 
            
              blankDate = convertMs(timeDiff);
                if (blankDate.seconds < 0) {
                  refs.startButton.disabled = false;
                  clearInterval(countDownTimer);
                  alert('Time is out');
                  return;
              }
              refs.seconds.textContent = addLeadingZero(blankDate.seconds);
              refs.minutes.textContent = addLeadingZero(blankDate.minutes);
              refs.hours.textContent = addLeadingZero(blankDate.hours);
              refs.days.textContent = addLeadingZero(blankDate.days);

                  }, 1000);
            }
      }
  },
};


flatpickr(refs.inputTime, options);


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

function addLeadingZero(time) {
    return  time ? time.toString().padStart(2, '0') : '00';
}