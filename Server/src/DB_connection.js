/* eslint-disable no-undef */
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require("../src/models/Favorite");
const UserModel = require("../src/models/User");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
