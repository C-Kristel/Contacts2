const mongoose = require('mongoose');
const PostSchema =  new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phoneNum: {
        type: [String]
    }
});

module.exports = mongoose.model('Posts', PostSchema);