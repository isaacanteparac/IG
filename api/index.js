const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { database } = require("./keys");
const BodyParser = require("body-parser");


const userRegister = require("./src/auth/router/userView");
const userAuth = require("./src/auth/router/userLogin");
const post = require("./src/post/routers/post");
const heartPost = require("./src/post/routers/heart")
const commentPost = require("./src/post/routers/comment");

const app = express();


//settings
app.set("port", process.env.PORT || 6660);

//MIDDLEWARES
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);




app.use(express.json());

app.use(BodyParser.json({ limit: "15mb" }));
app.use(
  BodyParser.urlencoded({
    limit: "15mb",
    extended: true,
  })
);
app.use(morgan("dev"));



//GLOBAL VARIABLES

//ROUTES

app.use("/i/user/view", userRegister);
app.use("/i/user/auth", userAuth);
app.use("/i/feed", post);
app.use("/i/heart", heartPost)
app.use("/i/comment", commentPost)

//STARTING THE SERVER
async function main() {
  await app.listen(app.get("port"));

  console.log("API "+app.get("port"));
}

main();