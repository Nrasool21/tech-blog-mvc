const { User } = require("../../models");

const handleSignUp = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({
      username: username,
      password: password,
    });
    console.log(user);

    if (user) {
      // console.log("Failed to create user");
      return res.status(200).json({ message: "success" });
    }
    return res.status(500).json({ error: "Failed to signup" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to signup" });
  }
};
module.exports = handleSignUp;
