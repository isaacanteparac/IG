message = {};
const db = require("../../../database");

const dataGet =
  "SELECT message.id AS idMessage, message.id_chat AS idChat, message.id_user AS idUser," +
  "users.name AS nameUser, users.lastname AS lastnameUser, users.nickname AS nicknameUser," +
  "message.message FROM(message INNER JOIN users ON message.id_user = users.id)";

message.get_ = async (req, res) => {
  try {
    const get = await db.query(dataGet + "WHERE message.id_chat = ?", [
      req.params.id,
    ]);
    res.status(200).json(get);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

message.post_ = async (req, res) => {
  const { id_user, id_chat, message } = req.body;
  const empty = (message, id_chat, id_user);
  if (empty != "" || empty != null) {
    try {
      const create = {
        message,
        id_user,
        id_chat,
      };
      await db.query("INSERT INTO message SET ?", [create]);
      res.status(200).json({ ok: true, message: "successful post" });
    } catch (error) {
      res.status(400).json({ ok: false, message: error });
    }
  } else {
    res.status(400).json({ ok: false, message: "do not enter empty data" });
  }
};

message.delete_ = async (req, res) => {
  try {
    await db.query("DELETE FROM message WHERE id = ?", [req.params.id]);
    res.status(200).json({ ok: true, message: "successfull delete" });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

message.put_ = async (req, res) => {
  const { message } = req.body;
  if (message != "" || message != null) {
    try {
      const put = {
        message,
      };

      await db.query("UPDATE message set ? WHERE id = ?", [put, req.params.id]);
    } catch (error) {
      res.status(400).json({ ok: false });
    }
  } else {
    res.status(400).json({ ok: false, message: "do not enter empty data" });
  }
};

module.exports = message;
