const getAllUsers = (req, res) => {
  res.json({
    message: "GET all Users Successfully",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "CREATE new User Successfully",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
