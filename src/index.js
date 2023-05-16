const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use((req, res) => {
  res.status(404).send('Not a valid endpoint');
});

app.listen(3000, () => {
  'Listening to PORT 3000';
});
