// ROUTES       /api/auth/register
// DESC         Register a new user
// ACCESS       PUBLIC
exports.register = async (req, res) => {
  res.send("Register Route");
};

// @ROUTES       /api/auth/login
// @DESC         Login an existing user
// @ACCESS       PUBLIC
exports.login = async (req, res) => {
  res.send("Login Route");
};
