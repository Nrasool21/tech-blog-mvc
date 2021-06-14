//Connection
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//schema
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: "user",
      key: "id",
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: "post",
      key: "id",
    },
  },
};

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
