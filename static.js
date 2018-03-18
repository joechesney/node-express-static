const express = require('express');
const app = express();

app.use(express.static('public'));
// reversed the order of the 'get' and 'use' methods
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/doggy', (req, res) => {
  res.send('Hello Doggy');
});

app.listen(3000);