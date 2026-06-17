// Fetch book data by ISBN using OpenLibrary API
function fetchBookByISBN(isbn) {
  return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      const key = `ISBN:${isbn}`;
      if (!data[key]) throw new Error(`No data found for ISBN ${isbn}`);
      const book = data[key];
      return {
        title: book.title || 'Unknown title',
        authors: (book.authors || []).map(a => a.name),
        publishDate: book.publish_date || '',
        pages: book.number_of_pages || null,
        publishers: (book.publishers || []).map(p => p.name),
        raw: book
      };
    });
}

// Examples:
fetchBookByISBN('9780575087057').then(console.log).catch(console.error);
fetchBookByISBN('9782806269171').then(console.log).catch(console.error);