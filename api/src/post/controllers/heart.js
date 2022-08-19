const heart = {};
const db = require("../../../database");

getData =
  "SELECT heart.count, heart.id AS idHeart, heart.id_post AS idPost, users.id AS idUser," +
  "users.name, users.lastname, users.nickname, users.photo AS userPhoto FROM (heart INNER JOIN users ON heart.id_user = users.id)";

heart.getCount_ = async (req, res) => {
  try {
    const countHeartPost = await db.query(
      "SELECT COUNT(*) FROM heart WHERE id_post = ?",
      [req.params.id]
    );

    res.status(200).json(countHeartPost);
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

heart.idGetUser_ = async (req, res) => {
  try {
    const idGetUser = await db.query(getData + "WHERE heart.id_post = ?", [
      req.params.id,
    ]);
    res.status(200).json(idGetUser);
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

heart.delete_ = async (req, res) => {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM heart WHERE id = ?", [id]);
    res.status(200).json({ ok: true, message: "successful removal" });
  } catch (error) {
    res.status(404).json({ ok: false, message: error });
  }
};

heart.post_ = async (req, res) => {
  const { count, id_post, id_user } = req.body;
  const empty = (count, id_post, id_user);
  if (empty != "" && empty != null) {
    try {
      const create = {
        count,
        id_post,
        id_user,
      };
      await db.query("INSERT INTO heart set ?", [create]);
      return res
        .status(200)
        .json({ ok: true, message: "successful publication" });
    } catch (error) {
      return res.status(404).json({ ok: false, message: error });
    }
  } else {
    return res
      .status(404)
      .json({ ok: false, message: "do not enter empty data" });
  }
};

module.exports = heart;
