function showHead() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');
    if (username.length > 0) {
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://minotar.net/helm/${username}/150.png')`;
        document.getElementById('save-button').style.display = 'block';
    }
}

function showSkull() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');

    if (username.length > 0) {
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://minotar.net/avatar/${username}/150.png')`;
        document.getElementById('save-button').style.display = 'block';
    }
}


function saveImage() {
  var headDiv = document.getElementById('mc-head');
  var image = headDiv.style.backgroundImage.slice(5, -2);
  window.open(image, '_blank');
}

