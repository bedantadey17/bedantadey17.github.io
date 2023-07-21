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