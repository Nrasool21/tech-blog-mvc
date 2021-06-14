const renderHomePage = (req, res) => {
  //get all posts
  //send send posts to handlebars
  //the array of post we get from model will feed in here
  res.render("homepage");
};

module.exports = renderHomePage;
