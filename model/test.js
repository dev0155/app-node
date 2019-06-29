let mongoose = require('mongoose');
let moment = require('moment');
let Schema = mongoose.Schema;

let testSchema = new Schema({
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Test', testSchema);
