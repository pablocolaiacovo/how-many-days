var mongoose = require('mongoose');
const Counter = require('../models/counter');

module.exports = (app) => {
    app.get('/counters', (req, res) => {
        req.counterModel.find({}).sort({ 'created_at': -1 }).exec((err, counters) => res.json(counters))
    });

    app.get('/counters/:id', (req, res) => {
        req.counterModel.findOne({ id: req.params.id }).exec((err, counter) => res.json(counter))
    });

    app.post('/counters', (req, res) => {
        const newCounter = new req.counterModel(Object.assign({}, req.body, { created_at: Date.now() }));
        newCounter.save((err, updatedCounter) => {
            res.json(updatedCounter)
        })
    })

    app.put('/counters', (req, res) => {
        const idParam = req.webtaskContext.query.id;
        req.counterModel.findOne({ _id: idParam }, (err, counterToUpdate) => {
            const updatedCounter = Object.assign(counterToUpdate, req.body);
            updatedCounter.save((err, counter) => res.json(counter))
        })
    })

    app.delete('/counters', (req, res) => {
        const idParam = req.webtaskContext.query.id;
        req.counterModel.remove({ _id: idParam }, (err, removedCounter) => res.json(removedCounter));
    })
}