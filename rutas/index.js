const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const getpostsController = require('../controllers/getPosteosController');

module.exports = function(){

    router.get('/apiwordpress',postsController.consultarApi);

    router.get('/posteos',getpostsController.obtenerPosteos)

    router.get('/getfullcontent/:name',getpostsController.getFullContent)

    return router;
}