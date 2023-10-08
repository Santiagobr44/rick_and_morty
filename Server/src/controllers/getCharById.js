const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = (
      await axios(URL + id)
    ).data;

    const character = { id, name, gender, species, origin, image, status };

    if (character.name) {
      return res.json(character);
    } else {
      return res.status(404).send("Not fount");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
