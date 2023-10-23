const userSchema = require("../models/model.User")
const bcrypt = require("bcrypt");
const Joi = require("joi");
const {verifyUsernameEmail} = require("../utils/verifyUsernameEmail");
const { FALSE, TRUE } = require("../constants");

const registerUser = async (req, res) => {
    const isValid = Joi.object({
       name: Joi.string().required(),
       username: Joi.string().min(3).max(30).alphanum().required(),
       password: Joi.string().min(8).required(),
       email: Joi.string().email().required(),
    }).validate(req.body);

    if(isValid.error) {
        res.status(400).json({
            status: 400,
            message: "Invalid Input",
            error: isValid.error
        })
    }

    const userExists = await verifyUsernameEmail(req.body.email, req.body.username)

    if(userExists==TRUE) {
        res.status(400).json({
            status: 400,
            message: "Email or Username already exists!"
        })
    }else if(userExists===FALSE){
        const userObj = new userSchema({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        userObj.save().then((savedUser) => {
            res.status(201).json({
                status: 201,
                message: "User Registered Successfully!",
                data: userObj
            })
        }).catch((err) => {
            res.status(400).json({
                status: 400,
                msg: "Error registering user pp",
                error: err
            })
        })
    }else if(userExists.error){
        res.status(400).json({
            status: 400,
            message: "DB error!",
            err: userExists.error
        });
    }
}

module.exports = {registerUser}