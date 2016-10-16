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

app.get('/robot-list', (req, res) => {
  res.json(model);
});

const delay = 1000;

const getID = () => {
  const highest = model.reduce((prev, robot) =>
    prev > Number(robot.id) ? prev : Number(robot.id), 0);

  return String(highest + 1);
};

const defer = fn => setTimeout(fn, delay + Math.random() * delay);

app.post('/robot-list', (req, res) => {
  const robot = {
    name: req.body.name || 'anon',
    id: getID()
  };
  model = model.concat(robot);

  defer(() => { res.json(robot); });
});

app.put('/robot-list/:robot_id', (req, res) => {
  console.log(req.body);
  const robotToUpdate = model.reduce((prev, robot) =>
    robot.id === req.params.robot_id ? robot : prev
    , null);

  const updatedRobot = Object.assign(robotToUpdate, { name: req.body.name });

  model = model.map(robot =>
    robot.id === req.params.robot_id ? updatedRobot : robot);

  defer(() => { res.json(updatedRobot)});
});

app.delete('/robot-list/:robot_id', (req, res) => {
  model = model.filter(robot =>
    robot.id !== req.params.robot_id);

  defer(() => { res.json({ message: 'Robot supprimé ! '})});
});

const listener = app.listen(port, () => {
  console.log(`A l'écoute sur le port ${listener.address().port}`);
});
