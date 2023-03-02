var express = require('express'); //Importamos la dependencia express
var app = express();//Creamos una instancia de express

var port = process.env.PORT || 3000;// Creamos una variable que escuche el servidor

app.get('/', function(req, res) { //Creamos una ruta para el home desde el nivel raiz
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res) { //Creamos una ruta para el api regresando un json
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.get('/person/:id', function(req, res) { //Creamos una ruta para el person regresando un html, con el id que se le pase
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port);