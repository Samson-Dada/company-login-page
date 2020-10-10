// setInterval(showTime, 1000);
// function showTime() {
//   var today = new today();
//   var hr = today.getUTCHours();
//   var min = today.getMinutes();
//   var sec = today.getSeconds();
//   let set = 'AM';
//   // am_pm = 'AM';
//   if (hr > 12) {
//     hr -= 12;
//     set = 'PM';
//   }
//   if (hr == 0) {
//     hr = 12;
//     set = 'AM';
//     hr = hr < 10 ? '0' + hr : hr;
//     min = min < 10 ? '0' + min : min;
//     sec = sec < 10 ? '0' + sec : sec;
//   }

//   let currentTime = hr + ':' + min + ':' + sec + set;
//   document.getElementById('clock').innerHTML = currentTime;
// }
// showTime();
// setInterval(showTime, 1000);
function showTime() {
  var today = new Date();
  var hr = today.getUTCHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  let set = 'AM';
  min = checkTime(min);
  sec = checkTime(min);
  document.getElementById('clock').innerHTML = hr + ':' + min + ':' + sec + set;
  var time = setTimeout(showTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
    return i;
  }
}
showTime();
