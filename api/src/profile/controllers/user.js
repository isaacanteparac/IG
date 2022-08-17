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

user.put_ = async (req, res) => {
  const { name, lastname, password } = req.body;
  const empty = (name, lastname, password);
  if (empty != "") {
    try {
      const put = {
        name,
        lastname,
        password,
      };
      await db.query("UPDATE users set ? WHERE id = ?", [put, req.params.id]);
      res.status(200).json({ ok: true, message: "successful update" });
    } catch (error) {
      res.status(400).json({ ok: false, message: error });
    }
  } else {
    res.status(400).json({ ok: false, message: "do not enter empty data" });
  }
};

module.exports = user;
