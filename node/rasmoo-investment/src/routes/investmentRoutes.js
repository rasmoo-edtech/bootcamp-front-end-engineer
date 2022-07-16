'use strict';

const investmentController = require('../controllers/investmentController');

const routes = async (fastify) => {
    fastify.post('/investments', investmentController.save);
    fastify.get('/investments', investmentController.findAll);
    fastify.get('/investments/:id', investmentController.findById);
    fastify.put('/investments/:id', investmentController.updateById);
    fastify.delete('/investments/:id', investmentController.deleteById);
}

module.exports = routes;
