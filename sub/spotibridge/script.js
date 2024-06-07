document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const spotifyLink = document.getElementById('spotifyLink').value;
    if (!spotifyLink) {
        alert('Please enter a Spotify link.');
        return;
    }

    const loadingDiv = document.getElementById('loading');
    const songNameDiv = document.getElementById('songName');
    const resultsDiv = document.getElementById('results');
    
    loadingDiv.style.display = 'block'; // Show loading text
    songNameDiv.innerHTML = '';
    resultsDiv.innerHTML = '';

    fetch(`https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(spotifyLink)}`)
        .then(response => response.json())
        .then(data => {
            loadingDiv.style.display = 'none'; // Hide loading text

            const songData = data.entitiesByUniqueId[data.entityUniqueId];
            const songName = songData?.title;
            const artistName = songData?.artistName;
            songNameDiv.textContent = `${artistName} - ${songName}`;

            const platforms = {
                appleMusic: { name: 'Apple Music', icon: 'fab fa-apple' },
                youtube: { name: 'YouTube', icon: 'fab fa-youtube' },
                amazonMusic: { name: 'Amazon Music', icon: 'fab fa-amazon' }
            };

            let linksFound = false;
            Object.entries(platforms).forEach(([key, platform]) => {
                const link = data.linksByPlatform[key]?.url;
                if (link) {
                    const anchor = document.createElement('a');
                    anchor.href = link;
                    anchor.className = 'result-box';
                    anchor.target = '_blank';

                    const icon = document.createElement('i');
                    icon.className = platform.icon;

                    const text = document.createElement('span');
                    text.textContent = `${platform.name}`;

                    anchor.appendChild(icon);
                    anchor.appendChild(text);
                    resultsDiv.appendChild(anchor);
                    linksFound = true;
                } else {
                    const noLink = document.createElement('p');
                    noLink.textContent = `No equivalent song found on ${platform.name}`;
                    resultsDiv.appendChild(noLink);
                }
            });

            if (!linksFound) {
                resultsDiv.textContent = 'No equivalent links found on any platform.';
            }
        })
        .catch(error => {
            loadingDiv.style.display = 'none'; // Hide loading text
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching the links.');
        });
});
