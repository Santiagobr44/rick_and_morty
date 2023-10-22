// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;
//   let access = false;

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }
//   });

//   return res.json({ access });
// };

// module.exports = login;
const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const foundUser = await User.findOne({
        where: { email },
      });
      if (!foundUser)
        return res.status(404).json({ message: "Usuario no encontrado" });
      if (foundUser.password !== password)
        return res.status(403).json({ message: "Contrasena incorrecta" });
      return res.status(200).json({ access: true });
    }
    return res.status(400).json({ message: "Faltan  datos" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = login;
