//fetching song.
let audio = new Audio("./Song/Har_Shambhu.mp3");
let click= document.getElementById('set');
let count=false;

click.addEventListener('click',()=>
{
  count=true;
})
setInterval(() => {
  //fetching date and time.
  let date = new Date();
  let Hours = date.getHours();
  let Minutes = date.getMinutes();
  let Seconds = date.getSeconds();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();

  //calculating angle of rotation.
  let DegHour = 30 * Hours + Minutes / 2,
    DegSec = 6 * Seconds,
    DegMin = 6 * Minutes + Seconds / 10;

  //Rotation of sticks using tranform property.
  document.getElementById("sec").style.transform = `rotate(${DegSec}deg)`;
  document.getElementById("min").style.transform = `rotate(${DegMin}deg)`;
  document.getElementById("hour").style.transform = `rotate(${DegHour}deg)`;

  //Convertion into "09" type for number <10.
  if (Hours < 10) {
    Hours = "0" + Hours;
  }

  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }

  if (d < 10) {
    d = "0" + d;
  }

  if (m < 10) {
    m=m+1;
    m = "0" + m;
  }
  else{
    m=m+1;
  }

  //getting the element input.
  let input = document.getElementById("time");
  let Input = document.getElementById('date');

  //For song to be played
  if ((Input.value == `${y}-${m}-${d}`)&&count) {
    if (input.value == `${Hours}:${Minutes}`) {
      if (Seconds == 0) {
        audio.play();
      }
      else {
        console.log('song is already playing');
      }
    }
    else if (audio.played) {
      audio.pause();
    }
  }
}, 1000);
