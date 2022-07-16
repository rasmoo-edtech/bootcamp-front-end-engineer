'use strict';

const investmentService = require('../services/investmentService');

const findAll = (request, reply) => {
    reply.send(investmentService.findAll(request.query));
}

const findById = (request, reply) => {
    const { id } = request.params;

    try {
        const investment = investmentService.findById(id);
        reply.status(200).send(investment);
    } catch (error) {
        reply.status(error.statusCode).send({
            message: error.message
        });
    }
}

const deleteById = (request, reply) => {
    const { id } = request.params;

    try {
        investmentService.deleteById(id);
        reply.status(204).send();
    } catch (error) {
        reply.status(error.statusCode).send({
            message: error.message
        });
    }
}

const save = (request, reply) => {
    try {
        const newInvestment = investmentService.save(request.body);
        reply.status(201).send(newInvestment);
    } catch (error) {
        reply.status(error.statusCode).send({
            message: error.message
        });
    }
}

const updateById = (request, reply) => {
    const { id } = request.params;

    try {
        investmentService.updateById(id, request.body);
        reply.send({ message: 'Investment updated successfully.' });
    } catch (error) {
        reply.status(error.statusCode).send({
            message: error.message
        });
    }
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById,
    updateById
}