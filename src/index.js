// import './sass/index.scss';

// import './js/r - get';
// import './js/c - post';
// import './js/u - patch';
// import './js/d - delete';

fetch('').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
});
