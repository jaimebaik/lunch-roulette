const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

//parising request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})