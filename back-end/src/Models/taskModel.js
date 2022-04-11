const mongoose = require("mongoose");

const model = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        require: true,
    },
    // date: {
    //     type: Date,
    //     required: true,
    // },
});

module.exports = new mongoose.model("Task", model);
