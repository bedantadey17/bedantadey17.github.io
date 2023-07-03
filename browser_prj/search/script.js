const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput').value;
  const searchEngine = document.getElementById('searchEngine').value;

  let url;
  if (searchEngine === 'google') {
    url = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
  } else if (searchEngine === 'wikipedia') {
    url = `https://en.wikipedia.org/wiki/${encodeURIComponent(searchInput)}`;
  } else if (searchEngine === 'youtube') {
    url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchInput)}`;
  } else if (searchEngine === 'bing') {
    url = `https://www.bing.com/search?q=${encodeURIComponent(searchInput)}`;
  } else if (searchEngine === 'ddg') {
    url = `https://duckduckgo.com/?q=${encodeURIComponent(searchInput)}`;
  }

  window.open(url, '_blank');
});




