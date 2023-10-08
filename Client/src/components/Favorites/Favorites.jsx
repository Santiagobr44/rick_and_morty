import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = () => {
  //   const myFavorites = useSelector((state) => state.myFavorites);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={style.favorites}>
        {myFavorites.map((favorite) => {
          return (
            <Card
              id={favorite.id}
              key={favorite.id}
              name={favorite.name}
              status={favorite.status}
              species={favorite.species}
              gender={favorite.gender}
              origin={favorite.origin}
              image={favorite.image}
              onClose={favorite.onClose}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
