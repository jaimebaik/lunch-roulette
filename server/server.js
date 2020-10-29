const path = require('path');
const express = require('express');

const rouletteController = require('./controllers/rouletteController');

const port = 3000;
const app = express();

//parising request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});
app.post('/', rouletteController.createRoulette, (req, res) => {
  res.redirect(`/roulette/${res.locals.roulette._id}`);
  // console.log("I'm in post req");
  // res.send(res.locals.roulette);
});

app.get('/roulette/:id', rouletteController.getRoulette, (req, res) => {
  console.log(res.locals.roulette);
  // res.status(200).json(res.locals.roulette);
  res.status(200).json({roulette: res.locals.roulette});
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});