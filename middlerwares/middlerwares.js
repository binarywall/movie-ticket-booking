const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const errorMiddlerware = (err, req, res, next) => {
  res.json({
    message: "Failed",
    error: err.toString()
  })
}

const encryptPassword = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    console.log(hash)
    req.body.password = hash;
    next()
    // Store hash in your password DB.
  });
}

module.exports = {
  errorMiddlerware,
  encryptPassword,
}