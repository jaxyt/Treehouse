const express = require('express');
const serve = require('express-static');
const fs = require('fs');
const port = 3000;
const app = express();

app.use(serve('./files'));

app.listen(port, function (req, res) {
    console.log(`server is running on port ${port}`);
});
