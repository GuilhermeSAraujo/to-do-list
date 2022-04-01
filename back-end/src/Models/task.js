const mongoose = require("mongoose");

const model = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
});

module.exports = new mongoose.model("Task", model);
