const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const memory = require('feathers-memory');  

const app = express(feathers());

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.configure(express.rest());

app.configure(socketio());

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});

app.use(express.errorHandler());

app.on('connection', connection => app.channel('everybody').join('connection'));

app.publish(data => app.channel('everybody'));

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}. 🚢`);
});
