let timer;
let seconds = 0;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to format the time
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
 return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Function to update the time display
function updateTime() {
  seconds++;
  timeDisplay.textContent = formatTime(seconds);
}

// Event listeners for buttons
startBtn.addEventListener('click', () => {
  if (timer == null) {
    timer = setInterval(updateTime, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  timeDisplay.textContent = '00:00:00';
});


