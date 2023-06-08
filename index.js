var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From akshay!!!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World akshay!!" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works(akshay)!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
