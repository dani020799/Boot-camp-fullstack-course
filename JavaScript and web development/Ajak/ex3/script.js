
function fetchBooks(queryType, queryValue) {
  if (!queryType || !queryValue) return Promise.reject(new Error('queryType and queryValue required'));
  const type = String(queryType).toLowerCase().trim();

  const googleQuery = type === 'isbn' ? `isbn:${queryValue}` : type === 'title' ? `intitle:${queryValue}` : null;
  if (!googleQuery) return Promise.reject(new Error(`Unsupported queryType: ${queryType}`));

  const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(googleQuery)}&maxResults=20`;

  return window.fetch(googleUrl)
    .then(res => {
      if (!res.ok) {
        return res.text().then(body => {
          const msg = `Google Books error ${res.status} ${res.statusText}`;
          console.warn(msg, body);
          throw new Error(msg);
        });
      }
      return res.json();
    })
    .then(data => {
      if (!data.items || data.items.length === 0) throw new Error('No books found (Google)');
      const results = data.items.map(itemFromGoogle);
      printResults(results);
      return results;
    })
    .catch(err => {
      console.warn('Google Books failed, falling back to OpenLibrary:', err.message);
      return fetchOpenLibrary(type, queryValue)
        .then(results => {
          printResults(results);
          return results;
        });
    });
}

function itemFromGoogle(item) {
  const info = item.volumeInfo || {};
  const title = info.title || 'Unknown title';
  const authors = info.authors || [];
  let isbn = null;
  if (Array.isArray(info.industryIdentifiers)) {
    const id = info.industryIdentifiers.find(i => /ISBN/i.test(i.type)) || info.industryIdentifiers[0];
    if (id) isbn = id.identifier;
  }
  return { title, authors, isbn };
}

function fetchOpenLibrary(type, value) {
  if (type === 'isbn') {
    const isbn = String(value).replace(/[^0-9Xx]/g, '');
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    return window.fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`OpenLibrary error ${res.status}`);
        return res.json();
      })
      .then(data => {
        const key = `ISBN:${isbn}`;
        if (!data[key]) throw new Error('No data found (OpenLibrary)');
        const b = data[key];
        const authors = (b.authors || []).map(a => a.name);
        return [{ title: b.title || 'Unknown title', authors, isbn }];
      });
  }

  if (type === 'title') {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(value)}&limit=20`;
    return window.fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`OpenLibrary error ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (!data.docs || data.docs.length === 0) throw new Error('No results (OpenLibrary)');
        return data.docs.map(doc => ({
          title: doc.title || 'Unknown title',
          authors: doc.author_name || [],
          isbn: (doc.isbn && doc.isbn[0]) || null
        }));
      });
  }

  return Promise.reject(new Error('Unsupported queryType for OpenLibrary'));
}

function printResults(results) {
  results.forEach(b => {
    console.log(`Title: ${b.title} | Authors: ${b.authors.length ? b.authors.join(', ') : 'N/A'} | ISBN: ${b.isbn || 'N/A'}`);
  });
}


window.fetchBooks = fetchBooks;


fetchBooks('title', "The Wise Man's Fears").then(r => console.log('Got', r)).catch(e => console.error(e.message));
fetchBooks('isbn', '9780143127741').then(r => console.log('Got', r)).catch(e => console.error(e.message));