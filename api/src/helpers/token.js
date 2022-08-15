const jwt = require("jsonwebtoken");
const key = "iii1iiii1iiii1iii1";
const token = {};

token.generateToken = async (data) => {
  return await jwt.sign(data, key);
};

token.validationToken = async (req, res, next) => {
  const xToken = req.header("x-token");
  if (!xToken) {
    return res.status(401).json({ message: "no token" });
  }
  try {
    const { name, lastname, email, nickname } = await jwt.verify(xToken, key);
    req.name = name;
    req.lastname = lastname;
    req.email = email;
    req.username = nickname;
    const user = {
      name: req.name,
      lastname: req.lastname,
      email: req.email,
      nickname: req.nickname,
    };
    return res.status(200).json({ ok: true, message: "yes token", user: user });
  } 
  catch (error) {
    return res.status(401).json({ ok: false, message: "tokenless validation" });
  }
  next();
};

module.exports = token;