/* let sounds = [
  {eleId: `kick`, url: `audio/kick.wav`},
  {eleId: `tom1`, url: `audio/tom1.wav`},
  {eleId: `tom2`, url: `audio/tom2.wav`},
]
 */
// console.table(sounds)

/*
push()  // add to the end
unshift()  // add to the beginning
pop()  // remove the last item
shift() // remove from first item



let searchForTom1 = function(drum) {
  return drum.eleId === `kick`
}

// Search an array for an element
let whatWasFound = sounds.find(drum => drum.eleId === `kick`)
console.log(whatWasFound)
*/








let aSong = {
  title: `Whatever`,
  artist: `Some Singer`,
  url: `audio/tom1.wav`,
  cover: `img/cover.jpg`
}
let sound = null
let trackPlaying = 0
let isPlaying = false

let loadMySong = function() {
  sound = new Audio(aSong.url) // currently playing

  let ttl = document.querySelector(`.title`)
  ttl.textContent = aSong.title
  
  let art = document.querySelector(`.artist`)
  art.textContent = aSong.artist
  
  let cov = document.querySelector(`.cover`)
  cov.setAttribute(`src`, aSong.cover)
}

let playMySong = function() {
  if (sound === null) {
    loadMySong()
  }
  sound.play()
}

let stopMySong = function() {
  sound.pause()
}


let playBtn = document.querySelector(`.play`)
playBtn.addEventListener('click', playMySong)

let pauseBtn = document.querySelector(`.pause`)
pauseBtn.addEventListener('click', stopMySong)

















let playAudio = function(url) {
  if (url) {
    let sfx = new Audio(url)
    let playAudio = function() {
      sfx.play()
    }
    sfx.addEventListener(`canplaythrough`, playAudio)
  }
}


let handleKeydown = function(event) {
  console.log(event.code)

  if (event.code === `Space`) {
    playAudio(`audio/kick.wav`)
  } else if (event.code === `KeyW`) {
    playAudio(`audio/tom1.wav`)
  } else if (event.code === `KeyE`) {
    playAudio(`audio/tom2.wav`)
  }
}

document.addEventListener(`keydown`, handleKeydown)




// Select all 7 drums
let playableDrums = document.querySelectorAll(`.playable`) 

// Handle clicking a .playable element
let handleClick = function(event) {
  // Look up the dom tree (path) and find the closest matching .playable ancestor element
  let drum = event.target.closest(`.playable`)
  // Find the data-sound value (which is the URL of the sfx)
  let url = drum.dataset.sound

  playAudio(url)
}

// For each playableDrum, run this function, pass the <g> as the parameter
let oneDrum = function(drum) {
  // Make each drum playable (one at a time)
  drum.addEventListener(`click`, handleClick)
}

playableDrums.forEach(oneDrum)
