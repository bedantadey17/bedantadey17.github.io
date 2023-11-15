function convertLink() {
    var inputLink = document.getElementById("inputLink").value;

    var shortsPattern = /https?:\/\/(www\.)?youtube\.com\/shorts\/([\w-]+)/;
    var match = inputLink.match(shortsPattern);

    if (match) {
        var id = match[2];
        var convertedLink = "https://www.youtube.com/watch?v=" + id;

        navigator.clipboard.writeText(convertedLink)
            .then(() => alert("Converted link copied to clipboard: " + convertedLink));

    
    } else {
        alert("Please enter a valid YouTube Shorts link.");
    }
}
