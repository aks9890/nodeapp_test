var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From akshay and sumit!!!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World akshay$sumit!!" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works(akshay@sumit)!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
