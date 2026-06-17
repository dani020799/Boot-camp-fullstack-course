
function fetchBook(queryType, queryValue) {
  if (!queryType || !queryValue) {
    return Promise.reject(new Error('queryType and queryValue are required'));
  }

  const type = String(queryType).toLowerCase().trim();

  if (type === 'isbn') {
    const isbn = String(queryValue).replace(/[^0-9Xx]/g, '');
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const key = `ISBN:${isbn}`;
        if (!data[key]) throw new Error(`No data found for ISBN ${isbn}`);
        const b = data[key];
        return {
          source: 'isbn',
          isbn,
          title: b.title || null,
          authors: (b.authors || []).map(a => a.name),
          publishDate: b.publish_date || null,
          pages: b.number_of_pages || null,
          publishers: (b.publishers || []).map(p => p.name),
          raw: b
        };
      });
  }

  if (type === 'title') {
    const q = encodeURIComponent(queryValue);
    const url = `https://openlibrary.org/search.json?title=${q}&limit=1`;

    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (!data.docs || data.docs.length === 0) throw new Error(`No results for title "${queryValue}"`);
        const doc = data.docs[0];
        return {
          source: 'title',
          title: doc.title,
          authors: doc.author_name || [],
          firstPublishYear: doc.first_publish_year || null,
          isbn: (doc.isbn && doc.isbn[0]) || null,
          raw: doc
        };
      });
  }

  return Promise.reject(new Error(`Unsupported queryType: ${queryType}`));
}


fetchBook('isbn', '9780575087057').then(console.log).catch(console.error);
fetchBook('title', 'How to Win Friends and Influence People').then(console.log).catch(console.error);