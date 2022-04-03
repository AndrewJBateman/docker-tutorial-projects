const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Basic Node app test!</h1>
  `);
})

app.listen(3000);
