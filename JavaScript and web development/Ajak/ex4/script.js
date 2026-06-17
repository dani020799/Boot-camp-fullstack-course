
const GIPHY_API_KEY = 'OuDWWI74wLfU0lBaYX3DUTmshnutwWkk';

function fetchGif(query) {
  if (!query || !query.trim()) {
    return Promise.reject(new Error('Search term required'));
  }

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${GIPHY_API_KEY}&limit=10`;

  return window.fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Network error: ${res.status}`);
      return res.json();
    })
    .then(data => {
      if (!data.data || data.data.length === 0) throw new Error('No gifs found');
      const firstGif = data.data[0];
      const title = firstGif.title || 'GIF';
      const embeddedUrl = firstGif.embed_url;
      if (!embeddedUrl) throw new Error('No embed URL found');
      return { title, embeddedUrl, firstGif };
    });
}

function searchGif() {
  const input = document.getElementById('searchInput');
  const query = input.value.trim();
  const resultDiv = document.getElementById('result');

  if (!query) {
    resultDiv.innerHTML = '<p style="color: red;">Please enter a search term</p>';
    return;
  }

  resultDiv.innerHTML = '<p>Searching...</p>';

  fetchGif(query)
    .then(result => {
      console.log('Found GIF:', result.title);
      console.log('Embed URL:', result.embeddedUrl);
      resultDiv.innerHTML = `
        <h2>${result.title}</h2>
        <iframe src="${result.embeddedUrl}" title="${result.title}" allowFullScreen></iframe>
      `;
    })
    .catch(err => {
      console.error('Error:', err.message);
      resultDiv.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    });
}


document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('keypress', e => {
      if (e.key === 'Enter') searchGif();
    });
  }
});

window.fetchGif = fetchGif;
window.searchGif = searchGif;