console.log("Good morning/day/evening!\nWe're running on version: 1.3.6")


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