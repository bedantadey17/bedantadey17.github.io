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

// newsletter
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("newsletterForm");
  var subscriptionStatus = document.getElementById("subscription-status");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;

    subscribeEmail(email);
    
    subscriptionStatus.textContent = "Successfully subscribed to the newsletter!";
    emailInput.value = "";
  });


  function subscribeEmail(email) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbwj_MFbR8HYfTHCu2_PB6MePmWHhGJn6sRYrjKBcGrscVTZq7BlqKdtXY6Fp7cgedE/exec", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
            subscriptionStatus.innerText = "Subscribed! You should now receive blogposts directly in your email.";
            emailInput.value = "";
          } else {
            subscriptionStatus.innerText = "An error occurred. Please try again.";
          }
        } else {
          subscriptionStatus.innerText = "An error occurred. Please try again.";
        }
      }
    };
  
    var params = "email=" + encodeURIComponent(email);
    xhr.send(params);
  }
  
});
