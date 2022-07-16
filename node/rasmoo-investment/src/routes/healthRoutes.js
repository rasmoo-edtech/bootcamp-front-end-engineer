'use strict';

const healthController = require('../controllers/healthController');

const routes = async (fastify) => {
    fastify.get('/health', healthController.healthcheck);
}

module.exports = routes;
