console.log("Good morning/day/evening!\nWe're running on version: 1.4.6")
console.log("Made by Bedanta Dey.")


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
document.addEventListener("DOMContentLoaded", () => {
  const currentTime = document.getElementById("currentTime");
  const timeDisplay = document.getElementById("timeDisplay");

  function updateTime() {
    const time = new Date();
    const formattedTime = Intl.DateTimeFormat("en-US", where).format(time);
    timeDisplay.textContent = '-- Time for me: '+ formattedTime + ' --';
  }

  updateTime();
  setInterval(updateTime, 1000);
});

const where = {
  timeZone: "Asia/Calcutta",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  dayPeriod: "short"
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