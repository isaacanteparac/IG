const comment = {};
const db = require("../../../database");

const getData =
  "SELECT comment.id AS idComment, comment.comment, users.id AS idUser, users.name AS nameUser," +
  "users.lastname AS lastnameUser, users.nickname AS nicknameUser, comment.id_post AS idPost FROM (comment INNER JOIN users ON comment.id_user = users.id)";

comment.get_ = async (req, res) => {
  try {
    const get = await db.query(getData + " WHERE comment.id_post = ?", [
      req.params.id,
    ]);
    res.status(200).json(get);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

comment.getCount_ = async (req, res) => {
  try {
    const countComment = await db.query(
      "SELECT COUNT(*) FROM comment WHERE id_post = ?",
      [req.params.id]
    );

    res.status(200).json(countComment);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

comment.post_ = async (req, res) => {
  const { comment, id_user, id_post } = req.body;
  const empty = (comment, id_user, id_post);
  if (empty != "" || empty != null) {
    try {
      const create = {
        comment,
        id_user,
        id_post,
      };
      await db.query("INSERT INTO comment SET ?", [create]);
      res.status(200).json({ ok: true, message: "successful post" });
    } catch (error) {
      res.status(400).json({ ok: false, message: error });
    }
  } else {
    res.status(404).json({ ok: false, message: "do not enter empty data" });
  }
};

comment.delete_ = async (req, res) => {
    try {
        await db.query("DELETE FROM comment WHERE id = ?", [req.params.id])
        res.status(200).json({ok:true, message:"successful removal"})
    } catch (error) {
        res.status(400).json({ok:false, message:error})
    }
}

module.exports = comment;
