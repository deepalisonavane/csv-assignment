const Csv = require('../models/csv');
const mongoose = require("mongoose");

exports.getCustomer = (req, res) => {
    Csv.find()
        .exec((err, customer) => {
            if(err) {
                return res.status(400).json({
                    error: 'No Customers found in DB'
                });
            }
            res.json(customer);
        });
};

exports.createCustomer = (req, res) => {
    let { name, address, age } = req.body;
    const customer = new Csv({ name, address, age });
    customer.save((err, customer) => {
        if(err) {
            return res.status(400).json({
                error: 'Failed to save customer in DB'
            });
        }
        res.json(customer);
    });
};

exports.updateCustomer = (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No customer with that id');

    Csv.findByIdAndUpdate(_id, {...post}, { new: true })
        .exec((err, customer) => {
            if(err) {
                return res.status(400).json({
                    error: 'Failed to update customer'
                });
            }
            res.json(customer);
        })

};
exports.deleteCustomer = (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No customer with that id');

    Csv.findByIdAndRemove(id).exec((err, student) => {
        if (err) {
            return res.status(400).json({
                error: 'Failed to delete customer'
            });
        }
        res.json({
            messege: 'customer Successfully Deleted'
        });
    });
};
