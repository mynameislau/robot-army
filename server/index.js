const express = require('express');
const app = express();

const model = [
  { name: 'toto', id: '0' },
  { name: 'tutu', id: '1' },
  { name: 'titi', id: '2' },
  { name: 'tata', id: '3' }
]


app.get('/', (req, res) => {
  res.json(model);
});

const listener = app.listen(9999, () => {
  console.log(`A l'écoute sur le port ${listener.address().port}`);
});