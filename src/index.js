const express = require('express');
const config = require('./server/config');
const app = config(express());

app.listen(process.env.PORT, process.env.IP);

