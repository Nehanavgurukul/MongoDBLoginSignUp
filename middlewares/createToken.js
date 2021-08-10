const jwt = require("jsonwebtoken");

module.exports.createToken = (data) => {
    return jwt.sign(data, process.env.SECRETE)
}

// const createToken = (data) => {
//     return jwt.sign(data, process.env.SECRETE)
// }

// module.exports = createToken;