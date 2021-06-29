//need access to the secret for session management
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const handlebars = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
const routes = require("./routes");
//const { route } = require("./routes/index");
//const routes = require("./routes");
//const helpers = require("helpers");

const PORT = process.env.PORT || 3000;

const app = express();

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  //store will save our sessions and sync that to mysql database
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const handlebarsOptions = {};

const hbs = handlebars.create(handlebarsOptions);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(cors());
app.use(session(sessionOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(routes);


app.get("/", (req, res) => {
  res.send("server working");
});

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(`Connection to DB failed: ${err.message}`);
  }
};

init();
