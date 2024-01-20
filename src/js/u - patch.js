const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById({ title: 'Велика тестова книга з NODE.JS' }, '36f7');
updateBookById({ rating: 1 }, 'f065');
updateBookById({ rating: 4, author: 'Mango' }, '6f8e');
