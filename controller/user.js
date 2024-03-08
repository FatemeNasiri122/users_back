"use strict";
const User = require("../model/user");

const findUser = async (id) => {
    try {
        const user = await User.findOne({ _id: id });
        if (!user) {
            const error = new Error("user not found");
            error.statusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
    
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find().sort({createdAt: -1});
        res.status(200).json({users})
    } catch (error) {
        next(next);
    }
}

exports.addUser = async (req, res, next) => {
    const { name, email, job } = req.body;
    try {
        const user = await User.create({ name, email, job});
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

exports.editUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, job } = req.body;
    try {
        findUser(id);
        const user = await User.findOneAndUpdate({ _id: id }, { name, email, job });
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.body;
    try {
        findUser(id);
        const user = await User.findOneAndDelete({ _id: id });
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}