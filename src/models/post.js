//Connection
const { Model } = require("sequelize");
const sequelize = require("../config/connection");

//schema
const schema = {};

//options
const options = {
  sequelize,
  modelName: "post",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

//User class
class Post extends Model {}

Post.init(schema, options);

//export
module.exports = Post;
