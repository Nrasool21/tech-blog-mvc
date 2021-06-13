//Connection
const { Model } = require("sequelize");
const sequelize = require("../config/connection");

//schema
const schema = {};

//options
const options = {
  sequelize,
  modelName: "comment",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

//User class
class Comment extends Model {}

Comment.init(schema, options);

//export
module.exports = Comment;
