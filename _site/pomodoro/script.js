var endDate;

function setTime(mins) {
  currentTime = new Date().getTime();
  endDate = currentTime + (mins * 60 * 1000);
}

var timer = setInterval(function() {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t > 0) {
    let mins = Math.floor((t % (1000*60*60)) / (1000*60));
    let secs = Math.floor((t % (1000*60)) / 1000);
    document.getElementById("timer").innerHTML = ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
    document.title = "Pomo - " + ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
  }
  else {
    document.getElementById("timer").innerHTML = "00:00";
    document.title = "Pomodoro Timer"
  }
}, 100);

// Task management
var niceJob = "Good job! Time for a break.";
function taskComplete() {
  current = document.getElementById("tasks").innerHTML;
  if (current == "✓✓✓")       { document.getElementById("tasks").innerHTML = niceJob; }
  else if (current == niceJob) { document.getElementById("tasks").innerHTML = "✓"; }
  else                         { document.getElementById("tasks").innerHTML += "✓"; }
}

function taskClear() {
  document.getElementById("tasks").innerHTML = "";
}
