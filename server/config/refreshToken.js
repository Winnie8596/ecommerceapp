const jwt = require("jsonwebtoken");

//server need generate bearer token
//server need another authentication call to generate jwt from refresh token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = { generateRefreshToken };
