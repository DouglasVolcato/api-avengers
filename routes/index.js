const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./port');

app.use(express.json());
app.use(cors());

const Controllers = require('../controllers/avengers.controllers');
const controllers = new Controllers();

app.get('/', controllers.getAllController);

app.get('/get/:id', controllers.getByIdController);

app.delete('/delete/:id', controllers.deleteController);

app.post('/post', controllers.postController);

app.put('/put/:idSearch', controllers.putController);

app.listen(port.port, () => {
  console.log(port.runningPhrase);
  console.log(port.access);
});
