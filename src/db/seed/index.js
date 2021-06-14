//need to build table name (db option) connection
require("dotenv").config();
const sequelize = require("../../config/connection");
const { User, Post, Comment } = require("../../models/index");
const users = require("./data/user.json");
const posts = require("./data/post.json");
const comments = require("./data/comment.json");

const seed = async () => {
  //connect your database
  await sequelize.sync({ force: true });

  //start seeding data
  await User.bulkCreate(users);
  console.log("Successfully seeded users");

  await Post.bulkCreate(posts);
  console.log("Successfully seeded posts");

  //comments has association to two hence should be last while seeding
  await Comment.bulkCreate(comments);
  console.log("Successfully seeded comments");

  process.exit(0);
};

seed();
