console.log("Good morning/day/evening!\nWe're running on version: 1.4.1")


const modePreference = localStorage.getItem('darkMode');


if (modePreference === 'true') {
  document.body.classList.add('dark-mode');
}


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// TIME

document.addEventListener("DOMContentLoaded",()=>{
  let ho;
  let CT = document.getElementById("currentTime");
  CT.innerHTML = r();
  clearInterval(ho);
  ho = setInterval(() => {
      CT.innerHTML = r();
  }, 1000)
  function r(){
      const time = new Date();
      return "-- Time for me: " + Intl.DateTimeFormat("en-GB", where).format(time) + " --";
  }
})

const where = {
  timeZone: "Asia/Calcutta",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  dayPeriod: "long"
}

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

// FRIEND COPY

document.addEventListener('DOMContentLoaded', () => {
  const friendButtons = document.querySelectorAll('.friend-button');

  friendButtons.forEach(button => {
    button.addEventListener('click', () => {
      const discordId = button.dataset.discordId;
      copyToClipboard(discordId);
      alert(`Copied Discord username: ${discordId}`);
    });
  });
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}


// MOUSE MOVE

let rr = document.createElement("div");
rr.id = "mou";
rr.position = "fixed";
document.body.appendChild(rr);


document.addEventListener('mousemove', (e)=>{
    let locX = e.clientX;
    let locY = e.clientY;
    let mouse = document.getElementById("mou");
    mouse.style.left = locX + "px";
    mouse.style.top = locY + "px" 
})

// EASTER EGG

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodeIndex = 0;
let backgroundMusic = new Audio('/images/ost.mp3');
let easterEggActivated = false; 

function activateEasterEgg() {
  easterEggActivated = true;
  const image = new Image();
  image.src = '/images/back_easteregg.gif'; 

  image.onload = function () {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const widthRatio = bodyWidth / imageWidth;
    const heightRatio = bodyHeight / imageHeight;
    const scaleRatio = Math.max(widthRatio, heightRatio);

    document.body.style.backgroundImage = `url(${image.src})`;
    document.body.style.backgroundSize = `${imageWidth * scaleRatio}px ${imageHeight * scaleRatio}px`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  };

  backgroundMusic.loop = true;
  backgroundMusic.volume = 0; 
  backgroundMusic.play();

  const fadeInDuration = 2000;
  const intervalStep = 20; 
  const volumeStep = 0.2 / (fadeInDuration / intervalStep);
  let currentVolume = 0;
  const fadeInInterval = setInterval(() => {
    currentVolume = Math.min(currentVolume + volumeStep, 0.5);
    backgroundMusic.volume = currentVolume;
    if (currentVolume >= 0.2) {
      clearInterval(fadeInInterval);
    }
  }, intervalStep);

  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, footer');
  textElements.forEach((element) => {
    element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
  });

  backgroundMusic.play();
  document.getElementById('darkModeToggle').style.display = 'none'; 
  document.getElementById('footer').textContent = 'Now Playing: 「 Cool Morning 」 - Danganronpa V3: Killing Harmony - Masafumi Takada';
  document.body.classList.add('easter-egg-active'); 
}





function checkKonamiCode(event) {
  const key = event.key;
  if (key === konamiCode[konamiCodeIndex]) {
    konamiCodeIndex++;
    if (konamiCodeIndex === konamiCode.length) {
      if (!easterEggActivated && window.location.pathname === '/') {
        activateEasterEgg();
      }
    }
  } else {
    konamiCodeIndex = 0;
  }
}



document.addEventListener('keydown', checkKonamiCode);
if (localStorage.getItem('easterEggActivated') === 'true' && window.location.pathname === '/') {
  activateEasterEgg();
}
function disableEasterEgg() {
  localStorage.removeItem('easterEggActivated');
}
window.addEventListener('beforeunload', disableEasterEgg);


// MUSIC FUNCTIONALITY

const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;
backgroundMusic.loop = true; 

musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    backgroundMusic.pause();
    musicPlaying = false;
  } else {
    backgroundMusic.play();
    musicPlaying = true;
  }
});
function checkMusicStatus() {
  if (!backgroundMusic.paused) {
    musicPlaying = true;
  }
}
checkMusicStatus();
