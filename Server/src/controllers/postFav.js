const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (name && origin && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
      });
      const favs = Favorite.findAll();
      return res.status(200).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;
