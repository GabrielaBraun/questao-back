const express = require('express');
const client = require('./controllers/client');
const router = express();

router.get('/milk', client.clientMilk);

module.exports = router;