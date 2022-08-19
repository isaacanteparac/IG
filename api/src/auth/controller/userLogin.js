const { encryptPassword, decryptPassword } = require("../../helpers/password");
const { generateToken } = require("../../helpers/token");
const db = require("../../../database");
const userAuth = {};

userAuth.login = async (req, res) => {
  const { nickname, password } = req.body;

  const dataUser = await db.query("SELECT * FROM users WHERE nickname = ?", [
    nickname,
  ]);
  try {
    if (dataUser.length > 0) {
      const verifyPassword = await decryptPassword(
        password,
        dataUser[0].password
      );
      if (verifyPassword) {
        const user = {
          id: dataUser[0].id,
          name: dataUser[0].name,
          lastname: dataUser[0].lastname,
          nickname: dataUser[0].nickname,
          email: dataUser[0].email,
        };
        const token = await generateToken(user);
        return res.status(200).json({ ok: true, token: token, user: user });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: false, message: "Wrong nickname or password" });
  }
};

userAuth.createUser = async (req, res) => {
  let { name, lastname, email, nickname, password } = req.body;
  const empty = (name, lastname, email, nickname, password);
  if(empty != "" || empty != null){
    const verifyEmail = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const verifynickname = await db.query(
      "SELECT * FROM users WHERE nickname = ?",
      [nickname]
    );
    try {
      if (verifyEmail.length < 1 && verifynickname.length < 1) {
        password = await encryptPassword(password);
        let newUser = {
          name,
          lastname,
          email,
          nickname,
          password,
        };
        await db.query("INSERT INTO users set ?", [newUser]);
        //TITLE: HACER CONSULTA PARA TRAER EL ID 
        const user = {
          name,
          lastname,
          email,
          nickname,
        };
        const token = await generateToken(user);
        res.status(200).json({ ok: true, token: token, user: user });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ ok: false, message: "email or nickname already exist" });
    }
  }
  else{
    res.status(404).json({ok: false, message:"do not enter empty data"})
  }
 
};

userAuth.revalidationToken = async (req, res) => {
  try {
    const userToken = {
      name: req.name,
      lastname: req.lastname,
      nickname: req.nickname,
      email: req.email,
    };
    const token = await generateToken(userToken);
    res(200).json({ ok: true, token: token, user: userToken });
    
  } catch (error) {
    res(401).json({ ok: false, message: "no revalidation"});
  }
};

module.exports = userAuth;