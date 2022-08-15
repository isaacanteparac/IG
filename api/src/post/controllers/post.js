const post = {};
const db = require("../../../database");

getData =
  "SELECT post.photo_video AS post, post.description, post.id AS idPost, users.id AS idUser," +
  "users.name, users.lastname, users.nickname, users.photo AS userPhoto FROM (post INNER JOIN users ON post.id_user = users.id)";

post.get_ = async (req, res) => {
  try {
    const get = await db.query(getData);
    res.status(200).json(get);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


post.getIdUser_ = async (req, res) => {
    try {
        const idUser = await db.query(getData + "WHERE users.id = ?", [
          req.params.id,
        ]);
        res.status(200).json(idUser);
      } catch (error) {
        res.status(400).json({ message: error });
      }
  };

post.idGet_ = async (req, res) => {
  try {
    const idGet = await db.query(getData + "WHERE post.id = ?", [
      req.params.id,
    ]);
    res.status(200).json(idGet);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

post.delete_ = async (req, res) => {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM heart WHERE id_post = ?", [id]);
    await db.query("DELETE FROM comment WHERE id_post = ?", [id]);
    await db.query("DELETE FROM post WHERE id = ?", [id]);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

post.post_ = async (req, res) => {
  const { photo_video, description, id_user } = req.body;
  const empty = (photo_video, id_user);
  if (empty != "" && empty != null) {
    try {
      const create = {
        photo_video,
        description,
        id_user,
      };
      console.log(create);
      await db.query("INSERT INTO post set ?", [create]);
      return res.status(200).json({ message: true });
    } catch (error) {
      return res.status(400).json({ ok: false, message: error });
    }
  } else {
    return res
      .status(400)
      .json({ ok: false, message: "do not enter empty data" });
  }
};

post.put_ = async (req, res) => {
  const { description } = req.body;
  const id = req.params.id;
  try {
    const put = {
      description,
    };
    await db.query("UPDATE post set ? WHERE id = ?", [put, id]);
    return res.status(200).json({ message: true });
  } catch (error) {
    return res.status(400).json({ ok: false, message: error });
  }
};

module.exports = post;
