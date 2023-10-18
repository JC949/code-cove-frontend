const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.info('React Server App listening on port ' + port);
});