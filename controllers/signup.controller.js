const signupService = require("../../MongoDB-Login-Sign-UP/models/userSchema");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signup = async (req, res) => {
    const Schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        cityId : Joi.string().required()
    })

    let validateSchema = Schema.validate(req.body);
    
    if (validateSchema.error) {
        return res.status(400).json({
            message: validateSchema.error.message || "Bad Request",
            code: 400
        })
    } else {
        validateSchema = validateSchema.value
    }

    const hashPass = await bcrypt.hash(req.body.password, saltRounds)
    try {
        let result = await signupService.findOne({ email: req.body.email })
        if (result) {
            console.log(`email already existe`)
            return res.json({ status: `email already existe` })
        } else {
            const result = await signupService.create({username: req.body.username,email: req.body.email,password: hashPass})
            console.log("Registration Successful....")
            return res.status(200).json({ status: "Registration Successful...." });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}

module.exports = { signup };