var buttonPressRain = new Audio('./sounds/Chuva.wav')
var buttonPressFlorest = new Audio('./sounds/Floresta.wav')
var buttonPressCoffeShop = new Audio('./sounds/Cafeteria.wav')
var buttonPressFireplace = new Audio('./sounds/Lareira.wav')
let inputRangeRainClick = document.querySelector('.inputrangerain')
let inputRangeRain = document.querySelector('.inputrangerain')
let inputRangeFlorest = document.querySelector('.inputrangeflorest')
let inputRangeCoffeShop = document.querySelector('.inputrangecoffeshop')
let inputRangeFireplace = document.querySelector('.inputrangefireplace')
let buttonPlay = document.querySelector('.play')
let buttonStop = document.querySelector('.stop')
let buttonSetUp = document.querySelector('.setUp')
let buttonSetDown = document.querySelector('.setDown')
let buttonRain = document.querySelector('.rain')
let buttonRainClick = document.querySelector('.rainClick')
let buttonFlorest = document.querySelector('.florest')
let buttonFlorestClick = document.querySelector('.florestClick')
let buttonCoffeShop = document.querySelector('.coffeShop')
let buttonCoffeShopClick = document.querySelector('.coffeShopClick')
let buttonFireplace = document.querySelector('.fireplace')
let buttonFireplaceClick = document.querySelector('.fireplaceClick')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let buttonWhiteTheme = document.querySelector('.whiteTheme')
let buttonDarkTheme = document.querySelector('.darkTheme')
let buttonPlayDark = document.querySelector('.playDark')
let buttonStopDark = document.querySelector('.stopDark')
let buttonSetUpDark = document.querySelector('.setUpDark')
let buttonSetDownDark = document.querySelector('.setDownDark')
let buttonRainDark = document.querySelector('.rainDark')
let buttonRainDarkClick = document.querySelector('.rainDarkClick')
let buttonFlorestDark = document.querySelector('.florestDark')
let buttonFlorestDarkClick = document.querySelector('.florestDarkClick')
let buttonCoffeShopDark = document.querySelector('.coffeShopDark')
let buttonCoffeShopDarkClick = document.querySelector('.coffeShopDarkClick')
let buttonFireplaceDark = document.querySelector('.fireplaceDark')
let buttonFireplaceDarkClick = document.querySelector('.fireplaceDarkClick')
let minutes = document.querySelector('.minutes')
let separator = document.querySelector('.separator')
let seconds = document.querySelector('.seconds')
let minutesDark = document.querySelector('.minutesDark')
let separatorDark = document.querySelector('.separatorDark')
let secondsDark = document.querySelector('.secondsDark')
let timer = document.querySelector('.timer')
let timerDark = document.querySelector('.timerDark')
let time

minutes = 25
seconds
buttonPressRain.loop = true
buttonPressFlorest.loop = true
buttonPressCoffeShop.loop = true
buttonPressFireplace.loop = true

function setVolumeRain(value) {
  buttonPressRain.volume = value
}
function setVolumeFlorest(value) {
  buttonPressFlorest.volume = value
}
function setVolumeCoffeShop(value) {
  buttonPressCoffeShop.volume = value
}
function setVolumeFireplace(value) {
  buttonPressFireplace.volume = value
}

inputRangeRain.addEventListener('input', () => {
  setVolumeRain(inputRangeRain.value)
})

inputRangeFlorest.addEventListener('input', () => {
  setVolumeFlorest(inputRangeFlorest.value)
})
inputRangeCoffeShop.addEventListener('input', () => {
  setVolumeCoffeShop(inputRangeCoffeShop.value)
})
inputRangeFireplace.addEventListener('input', () => {
  setVolumeFireplace(inputRangeFireplace.value)
})

function PressRain() {
  buttonPressRain.play()
}
function PressRainClick() {
  buttonPressRain.pause()
}
function PressFlorest() {
  buttonPressFlorest.play()
}
function PressFlorestClick() {
  buttonPressFlorest.pause()
}
function PressCoffeShop() {
  buttonPressCoffeShop.play()
}
function PressCoffeShopClick() {
  buttonPressCoffeShop.pause()
}
function PressFireplace() {
  buttonPressFireplace.play()
}
function PressFireplaceClick() {
  buttonPressFireplace.pause()
}
function PressRainDark() {
  buttonPressRain.play()
}
function PressRainDarkClick() {
  buttonPressRain.pause()
}
function PressFlorestDark() {
  buttonPressFlorest.play()
}
function PressFlorestDarkClick() {
  buttonPressFlorest.pause()
}
function PressCoffeShopDark() {
  buttonPressCoffeShop.play()
}
function PressCoffeShopDarkClick() {
  buttonPressCoffeShop.pause()
}
function PressFireplaceDark() {
  buttonPressFireplace.play()
}
function PressFireplaceDarkClick() {
  buttonPressFireplace.pause()
}

buttonWhiteTheme.addEventListener('click', function () {
  buttonWhiteTheme.classList.add('hide')
  buttonPlay.classList.add('hide')
  buttonStop.classList.add('hide')
  buttonSetUp.classList.add('hide')
  buttonSetDown.classList.add('hide')
  buttonRain.classList.add('hide')
  buttonFlorest.classList.add('hide')
  buttonCoffeShop.classList.add('hide')
  buttonFireplace.classList.add('hide')
  buttonRainClick.classList.add('hide')
  buttonFlorestClick.classList.add('hide')
  buttonCoffeShopClick.classList.add('hide')
  buttonFireplaceClick.classList.add('hide')
  document.getElementById('page').style.backgroundColor = '#121214'
  document.getElementById('timer').style.color = '#FFFFFF'
  buttonFireplaceDark.classList.remove('hide')
  buttonCoffeShopDark.classList.remove('hide')
  buttonFlorestDark.classList.remove('hide')
  buttonRainDark.classList.remove('hide')
  buttonSetDownDark.classList.remove('hide')
  buttonSetUpDark.classList.remove('hide')
  buttonStopDark.classList.remove('hide')
  buttonPlayDark.classList.remove('hide')
  buttonDarkTheme.classList.remove('hide')
})
buttonDarkTheme.addEventListener('click', function () {
  buttonWhiteTheme.classList.remove('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSetUp.classList.remove('hide')
  buttonSetDown.classList.remove('hide')
  buttonRain.classList.remove('hide')
  buttonFlorest.classList.remove('hide')
  buttonCoffeShop.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  document.getElementById('page').style.backgroundColor = '#E5E5E5'
  document.getElementById('timer').style.color = '#323238'
  buttonFireplaceDark.classList.add('hide')
  buttonCoffeShopDark.classList.add('hide')
  buttonFlorestDark.classList.add('hide')
  buttonRainDark.classList.add('hide')
  buttonFireplaceDarkClick.classList.add('hide')
  buttonCoffeShopDarkClick.classList.add('hide')
  buttonFlorestDarkClick.classList.add('hide')
  buttonRainDarkClick.classList.add('hide')
  buttonSetDownDark.classList.add('hide')
  buttonSetUpDark.classList.add('hide')
  buttonStopDark.classList.add('hide')
  buttonPlayDark.classList.add('hide')
  buttonDarkTheme.classList.add('hide')
})
buttonRainDark.addEventListener('click', function () {
  buttonRainDark.classList.add('hide')
  buttonRainDarkClick.classList.remove('hide')
  PressRainDark()
})
buttonRainDarkClick.addEventListener('click', function () {
  buttonRainDark.classList.remove('hide')
  buttonRainDarkClick.classList.add('hide')
  PressRainDarkClick()
})
buttonFlorestDark.addEventListener('click', function () {
  buttonFlorestDark.classList.add('hide')
  buttonFlorestDarkClick.classList.remove('hide')
  PressFlorestDark()
})
buttonFlorestDarkClick.addEventListener('click', function () {
  buttonFlorestDark.classList.remove('hide')
  buttonFlorestDarkClick.classList.add('hide')
  PressFlorestDarkClick()
})
buttonCoffeShopDark.addEventListener('click', function () {
  buttonCoffeShopDark.classList.add('hide')
  buttonCoffeShopDarkClick.classList.remove('hide')
  PressCoffeShopDark()
})
buttonCoffeShopDarkClick.addEventListener('click', function () {
  buttonCoffeShopDark.classList.remove('hide')
  buttonCoffeShopDarkClick.classList.add('hide')
  PressCoffeShopDarkClick()
})
buttonFireplaceDark.addEventListener('click', function () {
  buttonFireplaceDark.classList.add('hide')
  buttonFireplaceDarkClick.classList.remove('hide')
  PressFireplaceDark()
})
buttonFireplaceDarkClick.addEventListener('click', function () {
  buttonFireplaceDark.classList.remove('hide')
  buttonFireplaceDarkClick.classList.add('hide')
  PressFireplaceDarkClick()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('hide')
  buttonRainClick.classList.remove('hide')
  PressRain()
})
buttonRainClick.addEventListener('click', function () {
  buttonRain.classList.remove('hide')
  buttonRainClick.classList.add('hide')
  PressRainClick()
})
buttonFlorest.addEventListener('click', function () {
  buttonFlorest.classList.add('hide')
  buttonFlorestClick.classList.remove('hide')
  PressFlorest()
})
buttonFlorestClick.addEventListener('click', function () {
  buttonFlorest.classList.remove('hide')
  buttonFlorestClick.classList.add('hide')
  PressFlorestClick()
})
buttonCoffeShop.addEventListener('click', function () {
  buttonCoffeShop.classList.add('hide')
  buttonCoffeShopClick.classList.remove('hide')
  PressCoffeShop()
})
buttonCoffeShopClick.addEventListener('click', function () {
  buttonCoffeShop.classList.remove('hide')
  buttonCoffeShopClick.classList.add('hide')
  PressCoffeShopClick()
})
buttonFireplace.addEventListener('click', function () {
  buttonFireplace.classList.add('hide')
  buttonFireplaceClick.classList.remove('hide')
  PressFireplace()
})
buttonFireplaceClick.addEventListener('click', function () {
  buttonFireplace.classList.remove('hide')
  buttonFireplaceClick.classList.add('hide')
  PressFireplaceClick()
})
buttonSetUp.addEventListener('click', function () {
  minutes = minutes + 5
  minutesDisplay.textContent = minutes
})
buttonSetDown.addEventListener('click', function () {
  minutes = minutes - 5
  minutesDisplay.textContent = minutes
})

buttonStop.addEventListener('click', function () {
  minutes
  minutesDisplay.textContent = minutes
  seconds = '00'
  secondsDisplay.textContent = seconds

  clearTimeout(time)
})

buttonSetUpDark.addEventListener('click', function () {
  minutes = minutes + 5
  minutesDisplay.textContent = minutes
})
buttonSetDownDark.addEventListener('click', function () {
  minutes = minutes - 5
  minutesDisplay.textContent = minutes
})

buttonStopDark.addEventListener('click', function () {
  minutes
  minutesDisplay.textContent = minutes
  seconds = '00'
  secondsDisplay.textContent = seconds

  clearTimeout(time)
})

buttonPlayDark.addEventListener('click', function () {
  countdown()
})

function countdown() {
  time = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if (minutes <= 0) {
      seconds = '00'
      secondsDisplay.textContent = seconds
      return
    }

    countdown()
  }, 1000)
}
buttonPlay.addEventListener('click', function () {
  countdown()
})
