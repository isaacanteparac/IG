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
    //
}

message.delete_ = async (req, res) =>{
    //
}

message.put_ = async (req, res) =>{
    //
}

module.exports = message;
