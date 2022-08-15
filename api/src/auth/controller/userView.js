
const user = {};
const db = require("../../../database");

user.getUser = async (req, res) => {
  const allUser = await db.query("SELECT * FROM users");
  res.json(allUser);
};

user.getIdUser = async (req, res) => {
  const idUser = await db.query("SELECT * FROM users WHERE id = ?", [
    req.params.id,
  ]);
  res.json(idUser);
};

user.deleteIdUser = async (req, res) => {
  await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
  res.status(200).json({ message: "Delete id user" });
};


module.exports = user;