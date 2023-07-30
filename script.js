let isRunning = false
let interval,minutes,seconds,totalSeconds,inputMinutes,inputSeconds,targetSeconds;

const timerDisplay = document.getElementById('timer-display')
const startBtn = document.getElementById('start-btn')
const pauseBtn = document.getElementById('pause-btn')
const resetBtn = document.getElementById('reset-btn')
const addBtn = document.getElementById('add-btn')
const audio = new Audio('audio/alarm-clock-short-6402.mp3')

startBtn.addEventListener('click', () => {
if (!isRunning) {
  isRunning = true
  startTimer(0)
}
})

pauseBtn.addEventListener('click', () => {
if(!isRunning){
	isRunning = true
    pauseBtn.textContent = 'Pause'
    startTimer(totalSeconds)
}else{
    isRunning = false
	clearInterval(interval)
	pauseBtn.textContent = 'Resume'
	audio.pause()
}
})

resetBtn.addEventListener('click', () => {
clearInterval(interval)
totalSeconds = 0
audio.load()
audio.pause()
timerDisplay.textContent = '00:00'
pauseBtn.textContent = 'Pause'
isRunning = false
isPaused = false
})

addBtn.addEventListener('click',() => {
	const liElement = document.createElement('li')
	liElement.className = "list"
	let inputText = document.getElementById("mytasks").value;
	liElement.textContent = inputText
	const container = document.getElementById('task')
	container.appendChild(liElement)
})

function startTimer(t) {
totalSeconds = t
interval = setInterval(() => {
  minutes = Math.floor(totalSeconds / 60)
  seconds = totalSeconds % 60
  let displayMinutes = minutes < 10 ? '0' + minutes : minutes
  let displaySeconds = seconds < 10 ? '0' + seconds : seconds
  if(seconds==5){
	clearInterval(interval);
	timerDisplay.textContent = "Time To Exercise!";
	audio.play();
	return;
  }
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`
  totalSeconds++
}, 1000)
}
