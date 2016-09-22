const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let model = [
  { name: 'toto', id: '0' },
  { name: 'tutu', id: '1' },
  { name: 'titi', id: '2' },
  { name: 'tata', id: '3' }
];

const port = 9999;
const OK = 200;

app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    return res.sendStatus(OK);
  }

  res.header('Access-Control-Allow-Origin', '*');

  return next();
});

app.get('/', (req, res) => {
  res.json(model);
});

const delay = 1000;

app.post('/robot-list', (req, res) => {
  console.log(req.body.action);
  model = req.body.robots
    .filter(robot =>
      !robot.deleted
    )
    .map(robot => Object.assign({}, robot, { dirty: false }));

  setTimeout(() => {
    res.json(model);
  }, delay + Math.random() * delay);
});

const listener = app.listen(port, () => {
  console.log(`A l'écoute sur le port ${listener.address().port}`);
});
