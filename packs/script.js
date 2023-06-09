window.addEventListener("DOMContentLoaded", function () {
    var downloadButton = document.getElementById("downloadButton");
    var messageElement = document.getElementById("message");
  
    downloadButton.addEventListener("click", function () {
      var selectedPacks = document.querySelectorAll('input[name="pack"]:checked');
  
      if (selectedPacks.length > 0) {
        var packURLs = [];
  
        for (var i = 0; i < selectedPacks.length; i++) {
          var selectedPack = selectedPacks[i];
          var packName = selectedPack.value;
  
          switch (packName) {
            case "Pack A":
              packURLs.push("https://raw.githubusercontent.com/bedantadey17/cosmopacks/main/ClassicPlanks.zip");
              break;
            case "Pack B":
              packURLs.push("https://raw.githubusercontent.com/bedantadey17/cosmopacks/main/VisiblePowderSnow.zip");
              break;
            case "Pack C":
              packURLs.push("https://raw.githubusercontent.com/bedantadey17/cosmopacks/main/NoLeafCherry.zip");
              break;
            // Add more cases for other packs if needed
  
            default:
              break;
          }
        }
  
        var zip = new JSZip();
  
        var fetchPromises = packURLs.map(function (url) {
          return fetch(url, { mode: 'cors' }) // Include 'cors' mode
            .then(function (response) {
              return response.blob();
            })
            .then(function (blob) {
              var filename = url.substring(url.lastIndexOf("/") + 1);
              zip.file(filename, blob);
            })
            .catch(function (error) {
              console.log("Failed to fetch pack:", error);
            });
        });
  
        Promise.all(fetchPromises)
          .then(function () {
            zip.generateAsync({ type: "blob" }).then(function (content) {
              var timestamp = getTimestamp();
              var randomNumbers = generateRandomString(7);
              var filename = "Cosmopacks_" + timestamp + "_" + randomNumbers + ".zip";
  
              downloadZipFile(content, filename);
              showDialogBox(filename);
              messageElement.textContent = ""; // Reset the message when packs are selected
            });
          })
          .catch(function (error) {
            console.log("Failed to fetch one or more packs:", error);
          });
  
        function getTimestamp() {
          var now = new Date();
          var year = now.getFullYear().toString().slice(-2);
          var month = padZero(now.getMonth() + 1);
          var day = padZero(now.getDate());
          var hours = padZero(now.getHours());
          var minutes = padZero(now.getMinutes());
          var seconds = padZero(now.getSeconds());
  
          return day + month + year + "_" + hours + minutes + seconds;
        }
  
        function padZero(value) {
          return value.toString().padStart(2, "0");
        }
  
        function generateRandomString(length) {
          var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var result = "";
  
          for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
          }
  
          return result;
        }
  
        function downloadZipFile(content, filename) {
          var downloadLink = document.createElement("a");
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = filename;
          downloadLink.click();
        }
  
        function showDialogBox(filename) {
          var dialogBox = document.createElement("div");
          dialogBox.classList.add("dialog-box");
          dialogBox.innerHTML = `
            <h2>Downloading...</h2>
            <p>Success! Your packs should start downloading now.</p>
            <p>Filename: <code>${filename}</code></p>
            <button id="cancelButton">Okay!</button>
          `;
  
          // Append the dialog box to the document body
          document.body.appendChild(dialogBox);
  
          // Add event listener to the cancel button
          var cancelButton = document.getElementById("cancelButton");
          cancelButton.addEventListener("click", function () {
            // Remove the dialog box when cancel button is clicked
            document.body.removeChild(dialogBox);
          });
        }
      } else {
        messageElement.textContent = "No packs selected!";
      }
    });
  });
  