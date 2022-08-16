const user = {};
const db = require("../../../database");

user.get_ = async (req, res) => {
  try {
    const get = await db.query("SELECT * FROM users");
    res.status(200).json(get);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

user.idGet_ = async (req, res) => {
  try {
    const idGet = await db.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    res.status(200).json(idGet);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

user.delete_ = async (req, res) => {
  try {
    await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: "Delete id user" });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

module.exports = user;
