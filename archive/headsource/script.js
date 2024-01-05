// head with layer

function showHead() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');
    var headSize = document.getElementById('mc-size').value;

    if (username.length > 0) {
        if (headSize === "") {
            alert("Please enter a head size.");
            return;
        }
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://mc-heads.net/avatar/${username}/${headSize}')`;
        document.getElementById('save-button').style.display = 'block';
    }
}

// head without layer

function showHeadNaked() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');
    var headSize = document.getElementById('mc-size').value;

    if (username.length > 0){
        if (headSize === "") {
            alert("Please enter a head size.");
            return;
        }
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://mc-heads.net/avatar/${username}/${headSize}/nohelm')`;
        document.getElementById('save-button').style.display = 'block';
    }
}

// cube head

function showSkull() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');
    var headSize = document.getElementById('mc-size').value;

    if (username.length > 0) {
        if (headSize === "") {
            alert("Please enter a head size.");
            return;
        }
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://mc-heads.net/head/${username}/${headSize}')`;
        document.getElementById('save-button').style.display = 'block';
    }
}

// cube head no layer

function showSkullNaked() {
    var username = document.getElementById('mc-username').value;
    var headDiv = document.getElementById('mc-head');
    var headSize = document.getElementById('mc-size').value;

    if (username.length > 0) {
        if (headSize === "") {
            alert("Please enter a head size.");
            return;
        }
        headDiv.style.display = 'block';
        headDiv.style.backgroundImage = `url('https://mc-heads.net/head/${username}/${headSize}/nohelm')`;
        document.getElementById('save-button').style.display = 'block';
    }
}




function saveImage() {
  var headDiv = document.getElementById('mc-head');
  var image = headDiv.style.backgroundImage.slice(5, -2);
  window.open(image, '_blank');
}

