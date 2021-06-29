const renderHomePage = (req, res) => {
  //get all posts
  //send send posts to handlebars
  //the array of post we get from model will feed in here
  const { isLoggedIn } = req.session;
  res.render("homepage", { isLoggedIn });
};

module.exports = renderHomePage;
