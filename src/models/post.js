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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  },
  body: {
    type: DataTypes.TEXT,
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
};

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
