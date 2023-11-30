const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "Rizqi Rifai",
    email: "rifai.rizqi3@gmail.com",
    address: "Jakarta Barat",
  };
  res.json({
    message: "GET all Users Successfully",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new User Successfully",
    data: req.body, // response ke users
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser: ", idUser);
  res.json({
    message: "UPDATE user Successfully",
    data: req.body, // response ke users
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user Successfully",
    data: {
      idUser: idUser,
      name: "Rizqi",
      email: "rnrifai@gmail.com",
      address: "Jakarta Barat",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
