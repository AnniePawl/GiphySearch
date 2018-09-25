

var express = require('express');
var app = express();
var http = require('http');
var giphy = require('giphy-api')();
const env = require('dotenv').config();
const port = process.env.PORT || 3000;
var exphbs  = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
})

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
});


app.get('/', function (req, res) {
    console.log(req, res)
    var queryString = req.query.term
    if(req.query.term == undefined) {
        queryString = 'puppy';
    }
  giphy.search(queryString, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.listen(port, function () {
  console.log('Gif Search listening on port 3000!');
});
