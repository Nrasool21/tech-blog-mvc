const renderPostPage = (req, res) => {
  //get post by id with associated user and comments
  //send your data to handlebars
  res.render("post");
};

module.exports = renderPostPage;
