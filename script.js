console.log("Good morning/day/evening!\nWe're running on version: 1.3.5")
console.log("How to read version naming scheme: X.Y.Z\nZ is most minor release. As in very minor updates like bug fixes. \nY is a slightly major site update, with new features and stuff. \nX is a site release; will increment every Y=9 and Z=9 versions.")
console.log("Website made by Bedanta Dey and Gray Matter RI. All rights reserved.")
console.log("Wondering what happened to Newsletter? Go to: bedantadey.github.io/archive/letter")


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


// splash

window.addEventListener("DOMContentLoaded", function () {
  fetch("text-data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var texts = data.texts;
      var randomIndex = Math.floor(Math.random() * texts.length);
      var dynamicText = texts[randomIndex];

      var dynamicTextElement = document.getElementById("dynamicText");
      dynamicTextElement.textContent = dynamicText;
    })
    .catch(function (error) {
      console.log("Failed to fetch text data:", error);
    });
});
