const d = document;
let $days = d.querySelector(".days"),
  $hours = d.querySelector(".hours"),
  $minutes = d.querySelector(".minutes"),
  $seconds = d.querySelector(".seconds"),
  $numbers = d.querySelectorAll(".number");
console.log($numbers);

let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  interval;

const end = new Date("2020/12/25 00:00");
console.log(end);

function countdown() {
  let now = new Date(),
    distance = end - now;
  //console.log(distance)

  if (distance < 0) {
    console.log("Feliz navidad");
    clearInterval(interval);
    return;
  }
  let days = ("0" + Math.floor(distance / day)).slice(-2),
    hours = ("0" + Math.floor((distance % day) / hour)).slice(-2),
    minutes = ("0" + Math.floor((distance % hour) / minute)).slice(-2),
    seconds = ("0" + Math.floor((distance % minute) / second)).slice(-2);
  if ($days.textContent != days) {
    $days.innerHTML = days;
  }
  if ($hours.textContent != hours) {
    $hours.innerHTML = hours;
  }
  if ($minutes.textContent != minutes) {
    $minutes.innerHTML = minutes;
  }
  if ($seconds.textContent != seconds) {
    $seconds.innerHTML = seconds;
  }
}
function timer() {
  interval = setInterval(countdown, 1000);
}

const observer = new MutationObserver((mutation) => {
  //console.log(mutation);
  mutation.forEach((el) => {
    if (el.addedNodes.length) {
      //console.log(el);
      el.target.classList.add("flip");
      setTimeout(() => {
        el.target.classList.remove("flip");
      }, 500);
    }
  });
});

const observerOptions = {
  attributes: false,
  childList: true,
  subtree: false,
};

function startObserver() {
  $numbers.forEach((el) => {
    observer.observe(el, observerOptions);
  });
}

d.addEventListener("DOMContentLoaded", countdown(), timer(), startObserver());
