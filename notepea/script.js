window.addEventListener('load', function() {
    var noteTextarea = document.getElementById('note');
    var toggleModeButton = document.getElementById('toggleModeButton');
    var body = document.body;
    
    var savedNote = localStorage.getItem('note');
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (savedNote) {
      noteTextarea.value = savedNote;
    }
    
    setTheme(isDarkMode);
    
    document.getElementById('saveButton').addEventListener('click', function() {
      var noteContent = noteTextarea.value;
      localStorage.setItem('note', noteContent);
      var fileName = generateFileName();
      downloadTxtFile(noteContent, fileName);
    });
    
    document.getElementById('uploadButton').addEventListener('click', function() {
      var fileInput = createFileInput();
      
      fileInput.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (file) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
            noteTextarea.value = e.target.result;
          };
          
          reader.readAsText(file);
        }
      });
      
      fileInput.click();
      fileInput.parentNode.removeChild(fileInput);
    });
    
    document.getElementById('clearButton').addEventListener('click', function() {
      noteTextarea.value = '';
    });
    
    toggleModeButton.addEventListener('click', function() {
      isDarkMode = !isDarkMode;
      setTheme(isDarkMode);
      localStorage.setItem('darkMode', isDarkMode.toString());
    });
    
    function createFileInput() {
      var fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.txt';
      fileInput.style.display = 'none';
      
      document.body.appendChild(fileInput);
      return fileInput;
    }
    
    function downloadTxtFile(content, fileName) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
      element.setAttribute('download', fileName);
    
      document.body.appendChild(element);
      element.click();
      element.parentNode.removeChild(element);
    }
    
    function generateFileName() {
      var currentDate = new Date();
      var day = currentDate.getDate().toString().padStart(2, '0');
      var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      var year = currentDate.getFullYear().toString();
      var hours = currentDate.getHours().toString().padStart(2, '0');
      var minutes = currentDate.getMinutes().toString().padStart(2, '0');
      var seconds = currentDate.getSeconds().toString().padStart(2, '0');
      
      return 'notepea_' + day + month + year + '_' + hours + minutes + seconds + '.txt';
    }
    
    function setTheme(isDarkMode) {
      if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleModeButton.classList.add('dark-mode-button');
      } else {
        body.classList.remove('dark-mode');
        toggleModeButton.classList.remove('dark-mode-button');
      }
    }
  });
