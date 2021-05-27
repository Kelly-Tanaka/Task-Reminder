//Install express server
const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express(); // espress is a framework for bulding servers

// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
app.use('/api', jsonServer.router('db.json'));


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-crash'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angular-crash/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);