const all = {};
const db = require("../../../database");

all.get_ = async (req, res) => {
  try {
    const user = await db.query(
      "SELECT id, name, lastname, nickname FROM users"
    );
    const publication = await db.query("SELECT * FROM post");
    const heart = await db.query("SELECT * FROM heart");
    const comment = await db.query("SELECT * FROM comment");
    const follow = await db.query("SELECT * FROM follow");
    data = {
      user: user,
      post: publication,
      heart: heart,
      comment: comment,
      follow: follow,
    };
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
};

module.exports = all;
