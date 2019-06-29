let test = require('../model/test');
let fs = require('fs');
const index = fs.readFileSync('./uploads/index.html');
let controller = {};

controller.findAll = async (req, res, next) => {
    res.end(index);
};

controller.findById = async (req, res, next) => {
    res.json(await test.findById(req.params.id))
};

controller.create = async (req, res, next) => {
    try {
        await test.create(req.body);
        res.json({
            success: true,
            massage: 'order is successfully added'
        })
    } catch (e) {
        console.log(e.message)
    }
};

controller.put = async (req, res, next) => {
    try {
        await test.findOneAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
    } catch (e) {
        console.log(e.message)
    }
};

controller.delete = async (req, res, next) => {
    res.json(await test.findByIdAndRemove(req.params.id));
};

module.exports = controller;
