const express = require('express');
const pinIdRouter = require('./pin-id.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-generate-pin-id-rest', router);
    router.use('', pinIdRouter);

}

module.exports = routerApi;