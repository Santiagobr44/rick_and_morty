const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Favorite.destroy({
        where: { id },
      });
      const favs = await Favorite.findAll();
      // ! Cuando tienen muchos usuarios tienen que relacionar el favorito con el usuario
      // * User.addFavorite(favs)
      return res.status(201).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFav;
