

var express = require('express');
var app = express();

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-squirrel', function (req, res) {
  res.send('Hello Squirrel');
});

app.listen(3000, function () {
  console.log('Gif Search listening on port 3000!');
});
