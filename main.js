let start = document.getElementById('start');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let second2 = Number(second.innerText);
let minute2 = Number(minute.innerText);
let myintv;
let pause = document.getElementById('pause');
let span = document.getElementById('span')
let rest = document.getElementById('rest')
function Focus(){
  myintv = setInterval(() => {
    second2--;
    second.innerText = second2;
    if(second2 <= 0){
      minute2--;
      minute.innerText = minute2;
      second2 = 59;
      second.innerText = 59;
      if(minute2 <= 0){
        span.style.display = 'block'
        span.innerText = "Focus Session Completed!";
        second.innerText = 0;
        clearInterval(myintv)
        start.style.display = 'none';
        pause.style.display = 'none';
        rest.style.display = 'block'
      }
    }
  }, 1000);
}
start.onclick = function(){
  start.style.display = 'none';
  pause.style.display = 'block';
  Focus();
}
pause.onclick = function(){
  clearInterval(myintv);
  start.style.display = 'block';
  pause.style.display = 'none';
}
rest.onclick = function(){
  location.reload();
}
function clickauto(){
  setTimeout(() => {
    start.click();
  }, 5000);
}
clickauto();
