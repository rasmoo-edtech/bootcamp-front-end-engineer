'use strict';

const healthcheck = (request, reply) => {
    reply.send({ message: 'Server is up and running.' });
}

module.exports = {
    healthcheck
}
