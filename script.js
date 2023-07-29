
  let isRunning = false
  let isPaused = false
  let interval

  const timerDisplay = document.getElementById('timer-display')
  const startBtn = document.getElementById('start-btn')
  const pauseBtn = document.getElementById('pause-btn')
  const resetBtn = document.getElementById('reset-btn')
  const audio = new Audio('audio/alarm-clock-short-6402.mp3')

  startBtn.addEventListener('click', () => {
	if (!isRunning) {
	  startTimer()
	  isRunning = true
	}
  })

  pauseBtn.addEventListener('click', () => {
	if (isRunning) {
	  if (isPaused) {
		interval = setInterval(() => {
		  startTimer(1)
		}, 1000)
		pauseBtn.textContent = 'Pause'
		isPaused = false
		audio.play();
	  } else {
		clearInterval(interval)
		pauseBtn.textContent = 'Resume'
		isPaused = true
		audio.pause();
	  }
	}
  })

  resetBtn.addEventListener('click', () => {
	clearInterval(interval)
	timerDisplay.textContent = '00:00'
	pauseBtn.textContent = 'Pause'
	isRunning = false
	isPaused = false
  })

  function startTimer() {
	let totalSeconds = 0
	interval = setInterval(() => {
	  const minutes = Math.floor(totalSeconds / 60)
	  const seconds = totalSeconds % 60
	  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
	  const displaySeconds = seconds < 10 ? '0' + seconds : seconds
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
