const BASE_URL = 'http://localhost:4040';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(res => res.json());
}

removeBook('05b3');
removeBook('64b3');
