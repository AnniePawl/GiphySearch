

var express = require('express');
var app = express();

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-world', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
