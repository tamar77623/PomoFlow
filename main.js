let start = document.getElementById('start');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let pause = document.getElementById('pause');
let span = document.getElementById('span');
let rest = document.getElementById('rest');

let second2 = Number(second.innerText);
let minute2 = Number(minute.innerText);
let myintv;
let autoTimer; // متغير للتحكم بالـ Auto-click

function Focus() {
  myintv = setInterval(() => {
    if (minute2 === 0 && second2 === 0) {
      clearInterval(myintv);
      span.style.display = 'block';
      span.innerText = "Focus Session Completed!";
      start.style.display = 'none';
      pause.style.display = 'none';
      rest.style.display = 'block';
      return;
    }
    if (second2 === 0) {
      minute2--;
      second2 = 59;
    } else {
      second2--;
    }
    minute.innerText = minute2 < 10 ? '0' + minute2 : minute2;
    second.innerText = second2 < 10 ? '0' + second2 : second2;

  }, 1000);
}
start.onclick = function() {
  clearTimeout(autoTimer);
  start.style.display = 'none';
  pause.style.display = 'block';
  Focus();
};
pause.onclick = function() {
  clearTimeout(autoTimer);
  clearInterval(myintv);
  start.style.display = 'block';
  pause.style.display = 'none';
};
rest.onclick = function() {
  location.reload();
};
function clickauto() {
  autoTimer = setTimeout(() => {
    start.click();
  }, 5000);
}

clickauto();