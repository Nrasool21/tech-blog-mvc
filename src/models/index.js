const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

//association
User.hasMany(Post, {
  foreignKey: "user_id",
});
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
Post.hasMany(Comment, {
  foreignKey: "post-id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
