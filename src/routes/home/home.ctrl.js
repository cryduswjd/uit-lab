"use strict";

const User = require("../../model/User");

const output = {
    home: (req, res) => {
        res.render("home/first");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    signup: (req, res) => {
        res.render("home/signup");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        console.log(req.body)
        const response = await user.login();
        return res.json(response);
    },
    signup: async (req, res) => {
        const user = new User(req.body);
        console.log(req.body)
        const response = await user.signup();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};