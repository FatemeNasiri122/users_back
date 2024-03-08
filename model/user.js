"use strict";
const mongoose = require("mongoose");

const user = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    job: {
        type: String,
        require: true
    },
    
},{timestamps: true});

module.exports = mongoose.model("users", user);