// Require Express Module.
const express = require('express');

// Establish the Express App and Port for the Server.
const app = express();
const PORT = process.env.PORT || 8080;

// Set up Express to be able to handle the static content for the app, from the 'public' directory.
app.use(express.static('public'));

// Parse the application body.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set-up Handlebars as the Template Engine.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import the routes and give the server access to them.
const routes = require('./controllers/burgers_controller');

app.use(routes);

//Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log(`Server listening on: https://localhost:${PORT}`);
});