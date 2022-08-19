const follow = {};
const db = require("../../../database");

const getData =
  "SELECT follow.id AS idFollow, follow.id_user AS idUser, users.id AS idFollowUser, users.name AS nameUser," +
  "users.lastname AS lastnameUser, users.nickname AS nicknameUser FROM (follow INNER JOIN users ON follow.id_follow = users.id)";

follow.getFollower_ = async (req, res) => {
  try {
    const idGet = await db.query(getData + " WHERE follow.id_follow = ?", [
      req.params.id,
    ]);
    res.status(200).json(idGet);
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

follow.getFollowing_ = async (req, res) => {
  try {
    const idGet = await db.query(getData + " WHERE follow.id_user = ?", [
      req.params.id,
    ]);
    res.status(200).json(idGet);
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

follow.countFollower_ = async (req, res) => {
    try {
      const countComment = await db.query(
        "SELECT COUNT(*) FROM follow WHERE id_follow = ?",
        [req.params.id]
      );
  
      res.status(200).json(countComment);
    } catch (error) {
      res.status(404).json({ ok: false, message: error });
    }
  };
  
  follow.countFollowing_ = async (req, res) => {
      try {
        const countComment = await db.query(
          "SELECT COUNT(*) FROM follow WHERE id_user = ?",
          [req.params.id]
        );
    
        res.status(200).json(countComment);
      } catch (error) {
        res.status(404).json({ ok: false, message: error });
      }
    };

follow.delete_ = async (req, res) => {
  try {
    await db.query("DELETE FROM follow WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: "Delete id follow" });
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

follow.post_ = async (req, res) => {
  const { id_user, id_follow } = req.body;
  const empty = (id_user, id_follow);
  if (empty != "" || empty != null) {
    try {
      const create = {
        id_user,
        id_follow,
      };
      await db.query("INSERT INTO follow SET ?", [create]);
      res.status(200).json({ ok: true, message: "successful post" });
    } catch (error) {
      res.status(404).json({ ok: false, message: error });
    }
  } else {
    res.status(404).json({ ok: false, message: "do not enter empty data" });
  }
};

module.exports = follow;
