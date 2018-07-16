var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/js', express.static('js'));

app.get('/', function(request,response) {
	response.render('index')
});
app.get('*', function(request, response) {
	response.render('404');
});



app.listen(8080);